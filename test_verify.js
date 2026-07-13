const fs = require("fs");
const path = require("path");
const base = "C:\\Users\\zqc\\Documents\\Codex\\2026-07-11\\wo\\outputs\\stainless-steel-site\\";

var prodJs = fs.readFileSync(path.join(base, "js", "products.js"), "utf8");
eval(prodJs);

var total = 0;
var missing = 0;
Object.keys(PRODUCTS).forEach(function(catKey) {
  var cat = PRODUCTS[catKey];
  if (cat && cat.subs) {
    cat.subs.forEach(function(sub) {
      total++;
      var prod = null;
      for (var i = 0; i < cat.subs.length; i++) {
        if (cat.subs[i].id === sub.id) { prod = cat.subs[i]; break; }
      }
      if (!prod) {
        console.log("FAIL: " + catKey + "/" + sub.id);
        missing++;
        return;
      }
      var imgIssues = [];
      (prod.images || []).forEach(function(img) {
        var fp = path.join(base, img.replace(/\//g, "\\"));
        if (!fs.existsSync(fp)) { imgIssues.push(img); }
      });
      if (imgIssues.length > 0) {
        console.log("MISSING IMAGES: " + catKey + "/" + sub.id + " (" + sub.cn + ") - " + imgIssues.length);
      }
    });
  }
});

if (missing === 0) console.log("All " + total + " product lookups: OK");
else console.log("Failures: " + missing);
