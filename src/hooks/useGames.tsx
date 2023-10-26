import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text, background } from "@chakra-ui/react";
import { CanceledError } from "axios";
import GenereList from "../components/GenreList";
import { Genre } from "../hooks/useGenres";
import useData from "./useData";
import { GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.category,
      },
    },
    [gameQuery]
  );

  return { data, error, isLoading };
};
export default useGames;
