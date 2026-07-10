# Vedant Myana — Portfolio (Static Site)

A static HTML/CSS/JS mirror of the portfolio, ready to publish on GitHub Pages.

## Structure

```
index.html
style.css
script.js
assets/
  favicon.svg
  opengraph.jpg
  hero-bg.mp4
  about-bg.mp4
  skills-bg.mp4
  language-bg.mp4
  projects-bg.mp4
```

## Deploying to GitHub Pages

1. Create a new GitHub repository (or use an existing one).
2. Upload all files/folders in this ZIP to the root of the repository (keep the `assets/` folder structure intact).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", choose your branch (e.g. `main`) and folder `/ (root)`, then save.
5. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Note on the contact form and login button

The contact form and login/logout button call a backend API (`/api/contact`, `/api/auth/user`, etc.) that isn't included in this static export — GitHub Pages only serves static files. On GitHub Pages, the login button will simply stay hidden and the contact form will show a "couldn't be sent" message, since there's no server to receive the request. The rest of the site (design, layout, animations, navigation) works exactly the same.

If you want the contact form to work on GitHub Pages, point the fetch URL in `script.js` (search for `/api/contact`) to your own backend endpoint, or use a third-party form service (e.g. Formspree).
