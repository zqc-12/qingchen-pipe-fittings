# 沧县庆琛金属 · 独立站模板
# QingChen Stainless Steel · Standalone Website Template

## 目录结构 / Directory Structure

```
stainless-steel-site/
├── index.html             # 首页 - Homepage
├── products.html          # 产品列表页 - Product Listing
├── product-detail.html    # 产品详情模板 - Product Detail Template
├── about.html             # 关于我们 - About Us
├── contact.html           # 联系我们 - Contact Us
├── css/
│   └── style.css          # 全局样式 (可自定义配色) - Global styles
├── js/
│   └── main.js            # 交互脚本 - Interactions
└── images/                # 放入你的产品图片 / Place product images here
```

## 如何添加产品 / How to Add Products

1. 打开 `products.html`
2. 找到注释 `<!-- ===== Product Card Template ===== -->` 下方的产品卡片
3. 复制整块 `<div class="product-card">...</div>` 粘贴在后面
4. 修改以下内容：
   - `data-category` — 分类标识（elbow / tee / nipple / valve / coupling / flange）
   - 产品图片 — 把 `<div class="product-img">` 改成 `<img src="images/your-product.jpg" alt="..." />`
   - 产品名称、规格、材质、描述
   - 详情页链接

## 如何配色 / How to Change Colors

打开 `css/style.css`，修改 `:root` 中的 CSS 变量：

```css
--primary:       #1a2a3a;   /* 主色 - 深钢蓝 */
--accent:        #d4762a;   /* 强调色 - 铜色 */
--light-bg:      #f5f5f0;   /* 浅色背景 */
--dark-bg:       #0d1b2a;   /* 深色背景（页脚） */
```

## 中英文切换 / Language Toggle

- 每个页面上方导航栏有 **EN/中文** 按钮
- 双语文本使用 `<span class="lang-en">English Text</span>` 包裹
- 切换后自动记忆选择（localStorage）

## 部署 / Deployment

直接将 `stainless-steel-site/` 文件夹上传到任何静态托管服务：
- GitHub Pages
- Netlify / Vercel
- 阿里云 OSS / 腾讯云 COS
- 你的服务器 Nginx / Apache

## 自定义域名 / Custom Domain

将你的域名 DNS 解析到托管服务商提供的 IP，然后在托管商后台绑定域名即可。

