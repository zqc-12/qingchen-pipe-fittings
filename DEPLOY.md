# 部署指南 - QingChen Pipe Fittings

## 域名
**qingchenpipefittings.com**

## 网站文件位置
C:\Users\zqc\Documents\Codex\2026-07-13\wo\outputs\qingchen-site

---

## 第一步：推送到 GitHub（5分钟）

### 1. 登录 GitHub，创建仓库
1. 打开 https://github.com/new
2. Repository name 填：`qingchen-pipe-fittings`
3. 选择 Public（公开）
4. **不要勾选** "Add a README" 和 ".gitignore"
5. 点击 Create repository

### 2. 推送代码
创建成功后，你会看到页面上的命令。在 PowerShell 中依次执行：

```powershell
# 进入网站目录
cd C:\Users\zqc\Documents\Codex\2026-07-13\wo\outputs\qingchen-site

# 添加远程仓库（把 YOUR_TOKEN 换成你的 GitHub token）
git remote add origin https://YOUR_TOKEN@github.com/1727458180@qq.com/qingchen-pipe-fittings.git

# 推送到 GitHub
git push -u origin master
```

---

## 第二步：部署到 Vercel（5分钟）

1. 打开 https://vercel.com 并用 GitHub 账号登录
2. 点 **Add New → Project**
3. 选择 `qingchen-pipe-fittings` 仓库
4. **Framework Preset** 选择 **Other**（不用改）
5. 点 **Deploy** → 等待几十秒
6. 部署成功后 Vercel 会给你一个 `xxx.vercel.app` 的网址

---

## 第三步：绑定域名（5分钟）

1. 在 Vercel 项目页面点 **Settings → Domains**
2. 输入 `qingchenpipefittings.com` → Add
3. Vercel 会提示你修改 DNS 记录
4. 去你的域名注册商后台（Cloudflare/Namesilo 等）
5. 添加一条 **CNAME 记录**：
   - 主机记录：`@` 或留空
   - 目标：`cname.vercel-dns.com`
6. 等待几分钟 DNS 生效即可

---

## 第四步：提交给 Google（让谷歌搜到）

1. 打开 https://search.google.com/search-console
2. 添加域名 `qingchenpipefittings.com`
3. 选择 **DNS 验证** → 复制 TXT 记录
4. 去域名注册商添加 TXT 记录
5. 回到 Search Console 点验证
6. 验证后在左侧点 **Sitemaps** → 输入 `sitemap.xml` → 提交

---

## 后续更新网站
以后改完网页文件后，在目录下运行：
```powershell
git add -A
git commit -m "更新了什么内容"
git push
```
Vercel 会自动重新部署，几分钟就生效。
