import { Button } from "@chakra-ui/react";

const HOST = import.meta.env.VITE_HOST || "localhost:3000";
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const SCOPE = "read,read_all,activity:read_all";
const AUTH_URL = "http://www.strava.com/oauth/authorize";
const REDIRECT_URI = `https://${HOST}/exchange_token`;

function LoginButton() {
  let oauthUrl = `${AUTH_URL}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&approval_prompt=force&scope=${SCOPE}`;

  return (
    <Button
      size="lg"
      colorScheme="blue"
      mt="24px"
      onClick={() => (window.location.href = oauthUrl)}
    >
      Connect Strava
    </Button>
  );
}

export default LoginButton;
