# Deploy JustNews to Netlify

## Option A: Deploy via Netlify website (no CLI)

1. **Go to [app.netlify.com](https://app.netlify.com)** and sign in (or create a free account).

2. **Add your site**
   - Click **“Add new site”** → **“Deploy manually”**
   - Drag and drop your **JustNews** folder (the one that contains `index.html`, `app.js`, `netlify.toml`, and the `netlify` folder) onto the drop zone.

3. **Set the News API key**
   - After the first deploy, go to **Site configuration** → **Environment variables** (or **Site settings** → **Environment variables**).
   - Click **“Add a variable”** or **“Add environment variable”**.
   - **Key:** `apiKey`  
   - **Value:** your [NewsAPI.org](https://newsapi.org) API key  
   - Save and trigger a **“Trigger deploy”** (or **“Deploy site”**) so the function picks up the new variable.

4. Your site URL will be something like `https://random-name-123.netlify.app`. You can change it under **Domain management** → **Options** → **Edit site name**.

---

## Option B: Deploy via Netlify CLI

1. **Use Node (so `npm` is available)**
   ```bash
   nvm use 25.5.0
   ```

2. **Install Netlify CLI** (one time)
   ```bash
   npm install -g netlify-cli
   ```

3. **Log in to Netlify**
   ```bash
   netlify login
   ```
   Your browser will open to authorize the CLI.

4. **Initialize and deploy**
   ```bash
   cd c:\Users\kv414\OneDrive\Desktop\JustNews
   netlify init
   ```
   - Choose “Create & configure a new site”
   - Pick your team and a site name (or leave default).
   Then deploy:
   ```bash
   netlify deploy --prod
   ```

5. **Set the API key for the serverless function**
   - In [app.netlify.com](https://app.netlify.com) → your site → **Site configuration** → **Environment variables**
   - Add: **Key** `apiKey`, **Value** = your NewsAPI.org API key
   - Redeploy: **Deploys** → **Trigger deploy** → **Deploy site**, or run `netlify deploy --prod` again.

---

## Required: News API key

The `netlify/functions/news.js` function uses **NewsAPI.org**. You must set the **`apiKey`** environment variable in Netlify to your NewsAPI key.

- Get a key: [https://newsapi.org/register](https://newsapi.org/register)
- In Netlify: **Site configuration** → **Environment variables** → add `apiKey` with that value.

Without `apiKey`, the news function will not be able to fetch articles.
