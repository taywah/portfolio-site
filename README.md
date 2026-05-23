# Portfolio Site

Static HTML/CSS/JS portfolio site. Zero build step, zero dependencies (mermaid loads from a CDN — fine for any deployed host but the page still renders without it).

## Local preview

Just open `index.html` in any browser. Or run a tiny HTTP server:

```bash
cd portfolio-site
python3 -m http.server 8000
# Open http://localhost:8000
```

## Deploy

### Option A: Netlify drop (easiest)

1. Go to https://app.netlify.com/drop
2. Drag the entire `portfolio-site/` folder into the browser
3. Live URL in ~10 seconds — claim it under your free account afterward

### Option B: GitHub Pages

```bash
# From a fresh repo
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin git@github.com:tyoung18/portfolio.git
git push -u origin main

# Then in GitHub: Settings -> Pages -> Source: deploy from main / root
```

### Option C: Vercel

```bash
npm i -g vercel
cd portfolio-site
vercel
# Follow prompts; site live at *.vercel.app in ~30 seconds
```

### Option D: Cloudflare Pages

Drag-and-drop via https://dash.cloudflare.com → Pages → Upload assets.

## File map

```
portfolio-site/
├── index.html                          # Hero, projects grid, about, contact
├── assets/
│   ├── style.css                       # Single stylesheet (light + dark mode)
│   ├── script.js                       # Theme toggle (persists to localStorage)
│   └── images/                         # Empty — drop screenshots in here
├── projects/                           # 8 deep-dive project pages
│   ├── audience-funnel-builder.html
│   ├── naics-whitespace.html
│   ├── winback-phantom-recovery.html
│   ├── industry-heat-score.html
│   ├── plan-roadmap.html
│   ├── competitor-churn-signal.html
│   ├── cursor-skill-ecosystem.html
│   └── salesforce-data-quality.html
└── case-studies-source/                # Markdown sources (for re-editing the HTML)
```

## Editing

The HTML pages are designed to be edited directly — no build step. Each project page is self-contained. The mermaid diagrams use the JavaScript library loaded at the bottom of each page; if you want to change a diagram, edit the `<pre class="mermaid">` block.

To customize:

- **Change the contact email**: search-replace `taylor.young.data@gmail.com` (currently a placeholder — update with your preferred contact)
- **Change the resume link**: `../resume/pdfs/taylor_young_senior_staff_data_scientist.pdf` is the default download link from the hero
- **Add a screenshot** to a project page: drop the file in `assets/images/` and add an `<img>` to the relevant project HTML
- **Change the theme**: edit `:root` and `[data-theme="dark"]` in `assets/style.css`

## Custom domain

Once deployed, point a custom domain (e.g. `taylor-young.com`) at the host:

- Netlify: Site settings → Domain → Add custom domain
- GitHub Pages: Settings → Pages → Custom domain
- Vercel: Project settings → Domains → Add
- Cloudflare Pages: Custom domain → Add

All four issue a free SSL cert.
