const express = require("express");
const app = express();
const port = process.env.PORT || 80;
const host = process.env.HOST || "localhost";
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

app.use(express.static("dist"));

app.get("/exchange_token", (req, res) => {
  const queryParams = req.query;
  const code = queryParams.code;

  getAuthJSON(code).then((json) => {
    res.redirect(`http://${host}/?token=${json.access_token}`);
    // TODO: probably not the best to have the access token
    //       in the URL params (https://g.co/bard/share/f9adf9105f22)
  });
  // TODO: Check for the correct scopes.
});

async function getAuthJSON(code) {
  const response = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: client_id,
      client_secret: client_secret,
      code: code,
      grant_type: "authorization_code",
    }),
  });
  const authJSON = await response.json();
  return authJSON;
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
