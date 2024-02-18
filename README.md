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

# Run Locally

Need node version > 20

```bash
npm run start
```

# Run Prod

```bash
$ npm run start_production
```

Well, the above doesn't work so well, so I started using Forever.

```bash
npm install -g forever
```

Then, from the server dir:

```bash
NODE_ENV=production CLIENT_ID=<ID> CLIENT_SECRET=<SECRET> PORT=<PORT> HOST=<HOST> forever start app.js
```

So far the app hasn't crashed, so 🤷 .

# Run just the UI

```bash
npm run build
npm run dev
```

# Oauth Flow

https://g.co/bard/share/3163f00555d9


