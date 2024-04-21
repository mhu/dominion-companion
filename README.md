# Dominion Companion

## Deployment

```bash
npm run build
```

Edit links in dist/index.html to include `/dominion-companion/`.

```html
<!-- Before -->
<script type="module" crossorigin src="/assets/index-Df6dS_d9.js"></script>
<link rel="stylesheet" crossorigin href="/assets/index-DcMB1r3G.css" />

<!-- After -->
<script
  type="module"
  crossorigin
  src="/dominion-companion/assets/index-Df6dS_d9.js"
></script>
<link
  rel="stylesheet"
  crossorigin
  href="/dominion-companion/assets/index-DcMB1r3G.css"
/>
```

```bash
npm run deploy
```
