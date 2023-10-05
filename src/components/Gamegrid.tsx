import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import Gamecard from "./Gamecard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const Gamegrid = () => {
  const { games, error, isLoading } = useGames();
  const skelton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding={"10px"}
        spacing={5}
      >
        {isLoading &&
          skelton.map((item) => (
            <GameCardContainer>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <Gamecard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
export default Gamegrid;
