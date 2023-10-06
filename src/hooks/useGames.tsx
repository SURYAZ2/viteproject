import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text, background } from "@chakra-ui/react";
import { CanceledError } from "axios";
import GenereList from "../components/GenreList";
import { Genre } from "../hooks/useGenres";
import useData from "./useData";

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

const useGames = (selectedGenre) => {
  const { data, error, isLoading } = useData<Game[]>(
    "/games",
    {
      params: { genres: selectedGenre?.id },
    },
    [selectedGenre.id]
  );

  return { data, error, isLoading };
};
export default useGames;
