# Takshashila AI Team — Homepage

Official homepage of the **Takshashila AI Team** at Takshashila University.
A fully static site (HTML + CSS + JS) styled with the university's brand
colors (orange `#e85c29`, indigo `#2e3169`) — no build step required.

## Project structure

```
index.html      – page content (edit team names, projects, stats here)
styles.css      – all styling and brand colors
script.js       – mobile menu toggle
assets/logo.svg – placeholder emblem (replace with the official logo)
render.yaml     – Render static-site configuration
```

## Run locally

Just open `index.html` in a browser, or serve it:

```
python -m http.server 8000
```

## Deploy on Render

1. Push this folder to a GitHub repository:
   ```
   git init
   git add .
   git commit -m "Takshashila AI Team homepage"
   git branch -M main
   git remote add origin https://github.com/<your-username>/takshashila-ai-team.git
   git push -u origin main
   ```
2. Go to [dashboard.render.com](https://dashboard.render.com) → **New → Static Site**.
3. Connect the GitHub repository. Render reads `render.yaml` automatically —
   leave *Build Command* empty and *Publish Directory* as `.` if asked.
4. Click **Create Static Site**. The page goes live at
   `https://takshashila-ai-team.onrender.com` (rename the service to change the URL).

Every `git push` to `main` redeploys automatically.

## Customising

- **Logo** — replace `assets/logo.svg` with the official university logo.
- **Hero photo** — add `assets/hero.jpg` and swap the `background` rule in
  `styles.css` (a commented example is provided in the `.hero` rule).
- **Team members** — edit the `#team` section in `index.html`.
- **Contact email** — search for `aiteam@takshashilauniv.ac.in` and replace.
