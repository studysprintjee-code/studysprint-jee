<<<<<<< HEAD
# Upload StudySprint to GitHub Pages

## Upload without Git

1. Create a new **public** repository on GitHub, for example `StudySprint`.
2. Open the repository and choose **Add file > Upload files**.
3. Upload all files and folders from this project, including:
   - `index.html`
   - `subject.html`
   - `subject.js`
   - `subject.css`
   - `script.js`
   - `storage-config.js`
   - `data.json`
   - `unit-dimensions.pdf`
   - `.github/workflows/deploy-pages.yml`
4. Commit the files to the `main` branch.
5. Open **Settings > Pages**.
6. Set the source to **GitHub Actions**.
7. Wait for the workflow to finish under the **Actions** tab.
8. Open the generated Pages URL.

## Adding more chapter PDFs

Use lowercase, URL-safe names, such as:

```text
physics/kinematics.pdf
chemistry/atomic-structure.pdf
mathematics/quadratic-equations.pdf
```

Update `storage-config.js` for each file:

```js
files: {
  physics: {
    "Kinematics": "physics/kinematics.pdf"
  }
}
```

For local files in the repository, keep `baseUrl` empty. Do not upload AWS, Backblaze, or GitHub access keys.

GitHub's browser upload is limited for large files. Keep each PDF below 25 MB for browser upload, or use Git/GitHub Desktop for files between 25 MB and 100 MB. Never upload files over 100 MB without Git LFS.
=======
# Upload StudySprint to GitHub Pages

## Upload without Git

1. Create a new **public** repository on GitHub, for example `StudySprint`.
2. Open the repository and choose **Add file > Upload files**.
3. Upload all files and folders from this project, including:
   - `index.html`
   - `subject.html`
   - `subject.js`
   - `subject.css`
   - `script.js`
   - `storage-config.js`
   - `data.json`
   - `unit-dimensions.pdf`
   - `.github/workflows/deploy-pages.yml`
4. Commit the files to the `main` branch.
5. Open **Settings > Pages**.
6. Set the source to **GitHub Actions**.
7. Wait for the workflow to finish under the **Actions** tab.
8. Open the generated Pages URL.

## Adding more chapter PDFs

Use lowercase, URL-safe names, such as:

```text
physics/kinematics.pdf
chemistry/atomic-structure.pdf
mathematics/quadratic-equations.pdf
```

Update `storage-config.js` for each file:

```js
files: {
  physics: {
    "Kinematics": "physics/kinematics.pdf"
  }
}
```

For local files in the repository, keep `baseUrl` empty. Do not upload AWS, Backblaze, or GitHub access keys.

GitHub's browser upload is limited for large files. Keep each PDF below 25 MB for browser upload, or use Git/GitHub Desktop for files between 25 MB and 100 MB. Never upload files over 100 MB without Git LFS.
>>>>>>> 1e88c0d0eee2de08cc3ed4e82c9c198e5849b700
