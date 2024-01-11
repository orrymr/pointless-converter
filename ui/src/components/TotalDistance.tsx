import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";

const METERS_TO_FATHOMS = 0.546807;

interface AthDistance {
  all_run_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
  };
}

interface Props {
  token: String;
  id: number;
}

function TotalDistance(props: Props) {
  const [athDistance, setAthDistance] = useState<AthDistance>();

  useEffect(() => {
    const getAthDistance = async () => {
      const response = await fetch(
        `https://www.strava.com/api/v3/athletes/${props.id}/stats`,
        {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }
      );

      const athDistance = (await response.json()) as AthDistance;
      setAthDistance(athDistance);
    };

    getAthDistance();
  }, []);

  return (
    <>
      {athDistance ? (
        <Text color="blue.600" fontSize="2xl">
          You have run {metersToFathoms(athDistance.all_run_totals.distance)}{" "}
          fathoms.
        </Text>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

function metersToFathoms(distanceMeters: number) {
  return (distanceMeters * METERS_TO_FATHOMS).toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });
}

export default TotalDistance;
