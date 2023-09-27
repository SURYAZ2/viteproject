import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games", {
        baseURL: "https://api.rawg.io/api",
        params: {
          key: "debc4248a8ba4033b017f4b499c3be36",
        },
      })
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return { games, error };
};

export default useGames;
