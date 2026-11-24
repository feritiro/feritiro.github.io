# Feritiro — Gameplay Programming Portfolio

Static portfolio site for GitHub Pages.

## Local development

1. Open this folder in VS Code.
2. Install the VS Code extension **Live Server**.
3. Right-click `index.html` and select **Open with Live Server**.

You can also use Python's built-in server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish

The site is configured for a root-level GitHub Pages repository (`feritiro.github.io`).

```bash
git status
git add .
git commit -m "Redesign gameplay programming portfolio"
git push origin main
```

GitHub Pages should publish the new commit automatically.

## Before publishing — content checklist

- [ ] Replace the placeholder art panels with screenshots from your actual projects.
- [ ] Add real gameplay clips or GIFs to the case studies.
- [ ] Add an architecture diagram for the ARPG Dungeon Master system.
- [ ] Add a verified flow diagram for asynchronous UI loading.
- [ ] Add specific personal contributions to Fire Path.
- [ ] Replace the empty `mailto:` link in `index.html` with your professional email.
- [ ] Add your resume as `assets/Fernando_Nishimura_Resume.pdf`, or change/remove the Resume link.
- [ ] Add LinkedIn only if you want it public.
- [ ] Verify every technical statement against the current implementation before publishing.

## Notes

The visual panels are CSS placeholders, not screenshots of the user's games. They are deliberately labeled by project and should be replaced with authentic media before the portfolio is treated as finished. Do not claim unverified metrics, implementation details, or responsibilities.
