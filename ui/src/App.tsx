import LoginButton from "./components/LoginButton";
import LoggedIn from "./components/LoggedIn";
import { Heading, Box, Text, Container } from "@chakra-ui/react";

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  return (
    <>
      <Container>
        <Box maxW="32rem">
          <Heading mb={4}>
            Have you ever wondered how many fathoms you've run?
          </Heading>
          <Text fontSize="xl">Now you can with this app, for some reason.</Text>
          {!token && <LoginButton />}
        </Box>
        <Box>{token && <LoggedIn token={token} />}</Box>
      </Container>
    </>
  );
}

export default App;
