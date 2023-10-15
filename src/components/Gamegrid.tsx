import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import Gamecard from "./Gamecard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Game } from "../hooks/useGames";
interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}
const Gamegrid = ({ selectedGenre , selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre , selectedPlatform);
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
            <GameCardContainer key={item}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <Gamecard game={game}/>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
export default Gamegrid;
