import TotalDistance from "./TotalDistance";
import { Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

interface Props {
  id: number;
  firstname: String;
  token: String;
}

function Pointless(props: Props) {
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image src="defn.png" alt="Definition of fathom" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">I'm sure you've always wanted to know.</Heading>
            <Text>Hello, {props.firstname}</Text>
            <TotalDistance token={props.token} id={props.id} />
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default Pointless;
