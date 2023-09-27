import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import Gamecard from "./Gamecard";

const Gamegrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid column={10} spacing={10}>
        {games.map((game) => (
          <Gamecard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
export default Gamegrid;
