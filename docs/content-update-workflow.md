# Updating the Website (Save Netlify Build Minutes)

The site rebuilds on Netlify when changes are published. If you publish lots of tiny changes one after another, it can use up the monthly build minutes.

## The simple rule

Make all your edits first, then publish once.

## The easiest way (recommended): Use the web editor

1) Open the website repo on GitHub in your web browser.
2) Press `.` (period) on your keyboard. This opens the built-in editor in the browser.
3) Make your edits (you can change several files before publishing anything).
4) When you are truly finished for the day, publish your changes:
   - Click the “Source Control” icon (looks like a branching line).
   - Type a short message like: `Update homepage text`
   - Click **Commit & Push**
   - If asked, choose **Create a new branch** (this is a safe “draft copy” of the site).
5) Back on GitHub, click **Compare & pull request** (this is a “please publish my changes” request).
6) When it looks right, click **Merge** (publish).

Important: avoid clicking **Commit & Push** again and again for tiny tweaks. Do a bunch of edits first, then publish once.

## Common edits (where things live)

- Main homepage text (hero section): `frontend/src/components/heroContent.js`
- Colors / fonts / spacing: `frontend/src/styles/global.css`
- Phone number and email: `frontend/src/components/contactInfo.js`

## If you are unsure

Stop before clicking **Merge** and ask for a quick review. Share the link to your “pull request” page.
