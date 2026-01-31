# Install Node.js with nvm-windows

On Windows you use **nvm-windows** (not the Unix nvm). Follow these steps.

---

## Step 1: Remove existing Node.js (if installed)

- **Settings** → **Apps** → search for **Node.js** → Uninstall  
This avoids conflicts with nvm-windows.

---

## Step 2: Install nvm-windows

1. Download the installer:  
   **https://github.com/coreybutler/nvm-windows/releases/latest**  
   Under **Assets**, download **nvm-setup.exe** (or **nvm-setup.zip** and extract, then run `nvm-setup.exe`).

2. Run **nvm-setup.exe** (as Administrator if prompted).

3. Use the default paths unless you have a reason to change:
   - NVM: `C:\Users\<You>\AppData\Roaming\nvm`
   - Node.js symlink: `C:\Program Files\nodejs`

4. Finish the wizard and **close all terminals**.

---

## Step 3: Open a new terminal and verify nvm

```powershell
nvm version
```

You should see something like `1.2.2`.

---

## Step 4: Install Node.js (LTS)

```powershell
nvm install lts
nvm use lts
```

Check:

```powershell
node --version
npm --version
```

---

## Step 5: (Optional) Install a specific version

```powershell
nvm list available    # see versions
nvm install 20.10.0   # example
nvm use 20.10.0
```

---

## Quick reference

| Command | Description |
|--------|-------------|
| `nvm list` | Installed Node versions |
| `nvm list available` | Versions you can install |
| `nvm install lts` | Install latest LTS |
| `nvm use <version>` | Switch active Node version |
| `nvm uninstall <version>` | Remove a version |

---

After this, you can run `netlify deploy --prod` from your JustNews folder (install Netlify CLI with `npm install -g netlify-cli` if needed).
