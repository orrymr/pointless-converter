# Overview

This is a React and Express.js app.
React project created using Vite.
Chakra was use for CSS.

# Deploy

Take `dist` directory in `ui` and pop it into `server`.
To generate new `dist`:

```bash
npm run build
```

TODO: automate the above.

Deployed on Google Cloud Run

```bash
gcloud run deploy dont-make-me-run-service     # From the server directory
```

# Run Locally

Need node version > 20

```bash
npm run start
```

# Run Prod

```bash
npm run start_production
```

# Oauth Flow

https://g.co/bard/share/3163f00555d9

# Deployment Options
