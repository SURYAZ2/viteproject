import { Badge } from "@chakra-ui/react";
import React from "react";
interface Props {
  score: number;
}
const Criticscore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize={"14px"}
      padding={2}
      borderRadius={"5px"}
    >
      {score}
    </Badge>
  );
};

export default Criticscore;
