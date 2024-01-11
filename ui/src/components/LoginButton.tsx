import { Button } from "@chakra-ui/react";

function LoginButton() {
  const CLIENT_ID = "64858";
  const SCOPE = "read,read_all,activity:read_all";
  const AUTH_URL = "http://www.strava.com/oauth/authorize";
  const REDIRECT_URI = "http://localhost/exchange_token";

  let oauthUrl = `${AUTH_URL}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&approval_prompt=force&scope=${SCOPE}`;

  console.log(oauthUrl);

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
