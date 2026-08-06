# Personal Portfolio

A plain HTML/CSS/JS personal portfolio site — no frameworks, no build tools.
Open `index.html` directly in a browser, or serve the folder with any static
file server.

## Structure

```
.
├── index.html            Home — hero + preview tiles
├── maker-story.html      The Maker Story — long-form bio
├── projects.html         Story Bank / Projects — filterable card grid
├── skills.html           Skills & Capabilities — badge grid
├── scouting.html         Scouting & Leadership — rank, roles, stats, service
├── journey.html          The Preparation Journey — progress timeline
├── css/style.css         Shared stylesheet (design system + all page styles)
├── js/main.js            Mobile nav toggle + project filter logic
└── assets/images/        Drop your real photos here
```

## Customizing

- **Text**: every placeholder is wrapped in `[brackets]` and/or styled in
  italic muted text (`.placeholder-text`) — search for `[` to find them all.
- **Name/title**: replace "Your Name" in the `<title>` tags and `.logo` links
  across all six HTML files.
- **Photos**: each `.img-placeholder` div is a stand-in. To use a real photo,
  replace it with an `<img>` tag, e.g.:
  ```html
  <img src="assets/images/profile.jpg" alt="Your name" class="hero-photo-img" />
  ```
  Add your image files to `assets/images/`.
- **Colors**: all colors live as CSS custom properties at the top of
  `css/style.css` under `:root` — change them once and the whole site updates.
- **Projects**: duplicate a `.project-card` block in `projects.html` and set
  its `data-category` to one of: `mechanical`, `fabrication`, `digital`,
  `fiber-arts`, `models` so it works with the filter buttons.

## Deploying

This is a static site — it works as-is on GitHub Pages, Netlify, Vercel, or
any static host. For GitHub Pages: push to GitHub, then enable Pages in the
repo settings (Settings → Pages → Deploy from branch → `main`).
