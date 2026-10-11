# Deployment Guide: Hostinger Single Shared Hosting

Your hosting plan (**Hostinger Single Shared Hosting**) is built for static and PHP websites served via Apache / LiteSpeed through **hPanel**.

Your React portfolio has already been configured and built as pure static files into the `dist/` directory.

---

## 🚀 Easy 3-Step Deployment via Hostinger hPanel

### Step 1: Log in to Hostinger hPanel
1. Go to [Hostinger Dashboard](https://hpanel.hostinger.com/).
2. Click **Websites** and click **Manage** next to your domain.
3. Open **File Manager** (Files -> File Manager).

---

### Step 2: Open `public_html`
1. In the File Manager, navigate to `public_html`.
2. Delete any default placeholder file (such as `default.php`).

---

### Step 3: Upload the Built Files
You have ready-to-upload files prepared in your project folder:
`D:\Projects\Nirvayak\nirvayak-global-portfolio`

#### Option A (Recommended - Fastest): Upload the Zip
1. Locate **`deploy-hostinger.zip`** in your project root folder.
2. In Hostinger File Manager, click **Upload** -> select `deploy-hostinger.zip`.
3. Right-click `deploy-hostinger.zip` inside `public_html` and select **Extract**.
4. Make sure all extracted files (`index.html`, `assets/`, `.htaccess`) are directly inside `public_html`.
5. Delete the `.zip` archive.

#### Option B: Upload folder contents directly
Upload everything inside the **`dist`** folder directly into `public_html`:
- `index.html`
- `.htaccess`
- `assets/` (folder containing CSS and JS)

---

## ⚙️ What Was Configured For Your Hosting Plan:
1. **Relative Asset Paths (`base: './'`)**:
   - In [`vite.config.js`](file:///D:/Projects/Nirvayak/nirvayak-global-portfolio/vite.config.js), configured relative pathing so CSS/JS assets resolve cleanly on shared hosting.
2. **Apache `.htaccess`**:
   - Added in [`public/.htaccess`](file:///D:/Projects/Nirvayak/nirvayak-global-portfolio/public/.htaccess) to automatically handle routing, enable **Gzip compression**, and cache static assets for fast load times.
3. **Build Output**:
   - Ready in [`dist/`](file:///D:/Projects/Nirvayak/nirvayak-global-portfolio/dist) and zipped as `deploy-hostinger.zip`.
