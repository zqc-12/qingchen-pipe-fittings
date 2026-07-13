# Helper: Restructure HTML to use proper lang-cn/lang-en blocks
# Takes original HTML and replaces inline "<span class="lang-en">" patterns
# with proper sibling block structure

param([string]$FilePath)

$html = Get-Content $FilePath -Raw

# Pattern 1: "Chinese text <span class="lang-en">English</span>"
# → "<span class="lang-cn">Chinese text</span> <span class="lang-en">English</span>"
$html = [regex]::Replace($html, 
    '(?<=>)([^<]*?)<span class="lang-en">([^<]*)</span>',
    { 
        $cn = $args[0].Groups[1].Value.Trim()
        $en = $args[0].Groups[2].Value.Trim()
        if ($cn -ne "" -and $en -ne "") {
            return '<span class="lang-cn">' + $cn + '</span> <span class="lang-en">' + $en + '</span>'
        } elseif ($en -ne "") {
            return '<span class="lang-en">' + $en + '</span>'
        }
        return $args[0].Value
    }
)

# Pattern 2: Handle cases where .lang-en is on its own in a block
# "<h2>标题<span class="lang-en">Title</span></h2>" → "<h2><span class="lang-cn">标题</span><span class="lang-en">Title</span></h2>"
$html = [regex]::Replace($html,
    '(?<=>)([^<]*?)<span class="lang-en">',
    { 
        $before = $args[0].Groups[1].Value.Trim()
        if ($before -ne "") {
            return '<span class="lang-cn">' + $before + '</span> <span class="lang-en">'
        }
        return '<span class="lang-en">'
    }
)

$html | Out-File $FilePath -Encoding UTF8
Write-Host "Processed: $FilePath"
