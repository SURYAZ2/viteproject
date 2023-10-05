import React from "react";
import useGenres from "../hooks/useGenres";
import { Box, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";
import Gamecard from "./Gamecard";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/Image-url";

const GenereList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} padding={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              src={getCroppedImageURL(genre.image_background)}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>{" "}
        </ListItem>
      ))}
    </List>
  );
};

export default GenereList;
