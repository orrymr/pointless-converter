import Pointless from "./Pointless";
import { useState, useEffect } from "react";

interface Props {
  token: String;
}

interface AthData {
  id: number;
  firstname: string;
}

function LoggedIn(props: Props) {
  const [athData, setAthData] = useState<AthData>();

  useEffect(() => {
    const getAthleteData = async () => {
      const response = await fetch(`https://www.strava.com/api/v3/athlete`, {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      });

      const athData = (await response.json()) as AthData;
      setAthData(athData);
    };

    getAthleteData();
  }, []);

  return (
    <>
      {athData ? (
        <Pointless
          id={athData?.id as number}
          firstname={athData?.firstname as String}
          token={props.token}
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default LoggedIn;
