import React from "react";
import useGenres from "../hooks/useGenres";
import { Box, Text } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";
import Gamecard from "./Gamecard";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";

const GenereList = () => {
  const { data } = useGenres();
  return (
    <>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}> {genre.name} </li>
        ))}
      </ul>
    </>
  );
};

export default GenereList;
