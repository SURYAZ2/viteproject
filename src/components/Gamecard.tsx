import {
  Card,
  Text,
  CardBody,
  Heading,
  Image,
  HStack,
  space,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import Platformcard from "./Platformcard";
import Criticscore from "./Criticscore";
import getCroppedImageURL from "../services/Image-url";
interface Props {
  game: Game;
}

const Gamecard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageURL(game.background_image)} />
      <CardBody>
        <Heading fontSize={{ sm: "xl", lg: "2xl" }}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <Platformcard
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Criticscore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default Gamecard;
