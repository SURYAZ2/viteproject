import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genere {
    id: number,
    name: string,
    

}





interface Genere {
    {
        "count": number,
        "next": string,
        "previous": string,,
        "results": Results[] 
        }



}


const useGeneres = () => {
    const [genere, setGames] = useState<Genere[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    apiClient.get('/genres').then();
  });

  return <div></div>;
};

export default useGeneres;
