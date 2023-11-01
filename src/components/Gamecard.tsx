import {
  Card,
  Text,
  CardBody,
  Heading,
  Image,
  HStack,
  space,
  Box,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import Platformcard from "./Platformcard";
import Criticscore from "./Criticscore";
import getCroppedImageURL from "../services/Image-url";
import Emmoji from "./Emmoji";

interface Props {
  game: Game;
}

const Gamecard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageURL(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <Platformcard
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Criticscore score={game.metacritic} />
        </HStack>
        <Heading fontSize={{ sm: "xl", lg: "2xl" }}>
          {game.name} <Emmoji ratings={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default Gamecard;
