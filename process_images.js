var fs = require("fs");
var path = require("path");
var pngjs = require("pngjs");
var jpeg = require("jpeg-js");

var ROOT = "C:/Users/zqc/Documents/Codex/2026-07-11/wo/outputs/stainless-steel-site/images";

function processImage(filePath) {
    var ext = path.extname(filePath).toLowerCase();
    var png;
    try {
        if (ext === ".png") png = pngjs.PNG.sync.read(fs.readFileSync(filePath));
        else if (ext === ".jpg" || ext === ".jpeg") {
            var j = jpeg.decode(fs.readFileSync(filePath), {formatAsRGBA:true});
            png = new pngjs.PNG({width:j.width,height:j.height});
            png.data = Buffer.from(j.data);
        } else return;
    } catch(e) { return; }
    
    var d = png.data, w = png.width, h = png.height;
    
    // Resize if too large
    if (w > 800 || h > 800) {
        var nw, nh;
        if (w > h) { nw = 800; nh = Math.round(h*800/w); }
        else { nh = 800; nw = Math.round(w*800/h); }
        var ratioX = w/nw, ratioY = h/nh;
        var nd = new Uint8Array(nw*nh*4);
        for (var ny=0; ny<nh; ny++) {
            for (var nx=0; nx<nw; nx++) {
                var ox = Math.floor(nx*ratioX), oy = Math.floor(ny*ratioY);
                var si = (oy*w+ox)*4, di = (ny*nw+nx)*4;
                nd[di]=d[si]; nd[di+1]=d[si+1]; nd[di+2]=d[si+2]; nd[di+3]=d[si+3];
            }
        }
        png = new pngjs.PNG({width:nw,height:nh});
        png.data = Buffer.from(nd);
        d = png.data; w = nw; h = nh;
    }
    
    // Skip if already has alpha
    var hasAlpha = false;
    [[0,0],[w-1,0],[0,h-1],[w-1,h-1]].forEach(function(c){
        if (d[(c[1]*w+c[0])*4+3] < 200) hasAlpha = true;
    });
    if (hasAlpha) return;
    
    // Detect background from edges
    var ec = {};
    for (var i=0; i<300; i++) {
        var x,y;
        var r = Math.random();
        if (r<0.25){x=Math.floor(Math.random()*w);y=Math.floor(Math.random()*5);}
        else if(r<0.5){x=Math.floor(Math.random()*w);y=h-1-Math.floor(Math.random()*5);}
        else if(r<0.75){x=Math.floor(Math.random()*5);y=Math.floor(Math.random()*h);}
        else{x=w-1-Math.floor(Math.random()*5);y=Math.floor(Math.random()*h);}
        var idx = (y*w+x)*4;
        var key = Math.round(d[idx]/10)*10+","+Math.round(d[idx+1]/10)*10+","+Math.round(d[idx+2]/10)*10;
        ec[key] = (ec[key]||0)+1;
    }
    var maxC=0, bgKey="255,255,255";
    for (var k in ec) { if (ec[k]>maxC) { maxC=ec[k]; bgKey=k; } }
    var bg = bgKey.split(",").map(Number);
    
    // Apply transparency
    var t = 35, fade = 30;
    for (var i=0; i<w*h; i++) {
        var idx = i*4;
        var dr = d[idx]-bg[0], dg = d[idx+1]-bg[1], db = d[idx+2]-bg[2];
        var dist = Math.sqrt(dr*dr+dg*dg+db*db);
        if (dist < t) d[idx+3] = 0;
        else if (dist < t+fade) d[idx+3] = Math.round((dist-t)/fade*255);
    }
    
    var outPath = filePath.replace(/\.(jpg|jpeg)$/i, ".png");
    fs.writeFileSync(outPath, pngjs.PNG.sync.write(png));
    if (outPath !== filePath) { try { fs.unlinkSync(filePath); } catch(e) {} }
}

var dirs = fs.readdirSync(ROOT).filter(function(d){return fs.statSync(path.join(ROOT,d)).isDirectory();});
var total = 0;
dirs.forEach(function(cat){
    var dir = path.join(ROOT, cat);
    fs.readdirSync(dir).filter(function(f){return /\.(png|jpg|jpeg)$/i.test(f);}).forEach(function(file){
        processImage(path.join(dir, file));
        total++;
        if (total % 30 === 0) process.stdout.write(".");
    });
});
console.log("\nDone! " + total + " images processed.");
