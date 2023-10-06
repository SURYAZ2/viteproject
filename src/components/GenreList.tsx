import React from "react";
import useGenres from "../hooks/useGenres";
import {
  Box,
  HStack,
  Image,
  List,
  ListItem,
  Text,
  Button,
  Spinner,
} from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";
import Gamecard from "./Gamecard";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/Image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenereList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} padding={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              src={getCroppedImageURL(genre.image_background)}
              borderRadius={5}
            />
            <Button variant={"link"} onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </Button>
            {/* <Text fontSize={"lg"}>{genre.name}</Text> */}
          </HStack>{" "}
        </ListItem>
      ))}
    </List>
  );
};

export default GenereList;
