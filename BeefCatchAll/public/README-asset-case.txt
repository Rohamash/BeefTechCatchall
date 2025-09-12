# Asset naming note for Netlify/Vite

Your logo file was named `BTCatchallLogo.png` (with uppercase letters). For best compatibility, especially on Netlify (which is case-sensitive), rename it to:

    btcatchalllogo.png

and update all references in your code to `/btcatchalllogo.png`.

This avoids issues where the image works locally (Windows, case-insensitive) but fails on Netlify (Linux, case-sensitive).
