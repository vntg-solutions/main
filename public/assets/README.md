# Site assets

The CareCue product section on the homepage uses **built-in SVG visuals** (logo and feature card), so no images are required for it to look complete.

If you want to use your own image files instead:

- **carecue-logo.png** – CareCue app icon (heart + checkmark). Replace the inline logo by updating `carecue-showcase.tsx` to use `<img src="/assets/carecue-logo.png" alt="CareCue app logo" />` in the logo area.
- **carecue-feature.png** – CareCue promo/banner (e.g. phone mockup). Similarly, swap the `CareCueFeatureVisual` component for an `<img src="/assets/carecue-feature.png" />` when you add the file.
