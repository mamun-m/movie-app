/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
interface ApiContextType {
  movies: Movie[];
  upcoming: upcomintMovie[];
  popularPerson: popularMan[];
  settimeWindow: (value: string) => void;
  timeWindow: string;
}

interface Movie {
  id: string;
  title: string;
  release_date: string;
  poster_path: string;
}
export interface upcomintMovie {
  id: string;
  title: string;
  release_date: string;
  backdrop_path: string;
}
interface popularMan {
  name: string;
  profile_path: string;
  popularity: string;
}

const DataContext = createContext<ApiContextType | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [movies, setmovies] = useState<Movie[]>([]);
  const [upcoming, setupcoming] = useState<upcomintMovie[]>([]);
  const [popularPerson, setpopularPerson] = useState<popularMan[]>([]);
  const [timeWindow, settimeWindow] = useState("day");
  useEffect(() => {
    const fetchAllData = async () => {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/trending/movie/${timeWindow}`,
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTg3NmNiOGQxNGY3YTQ2Mjg2MjMxM2E5N2NjYTcxZCIsIm5iZiI6MTc0NTQ1MTY4OC4yMiwic3ViIjoiNjgwOTdhYTg4YmNlYTY2YTg2YWE3OGI0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uKSS_w9wrD8ZeqCSaJnoziLL0zW82w0cNRy9ZDS5g0Y"
        }
      };
      axios
        .request(options)
        .then((res) => setmovies(res.data.results))
        .catch((err) => console.error(err));
    };
    fetchAllData();
    const showVideo = async () => {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/upcoming",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTg3NmNiOGQxNGY3YTQ2Mjg2MjMxM2E5N2NjYTcxZCIsIm5iZiI6MTc0NTQ1MTY4OC4yMiwic3ViIjoiNjgwOTdhYTg4YmNlYTY2YTg2YWE3OGI0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uKSS_w9wrD8ZeqCSaJnoziLL0zW82w0cNRy9ZDS5g0Y"
        }
      };
      axios
        .request(options)
        .then((res) => setupcoming(res.data.results))
        .catch((err) => console.error(err));
    };
    showVideo();
    const popularData = async () => {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/person/popular",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTg3NmNiOGQxNGY3YTQ2Mjg2MjMxM2E5N2NjYTcxZCIsIm5iZiI6MTc0NTQ1MTY4OC4yMiwic3ViIjoiNjgwOTdhYTg4YmNlYTY2YTg2YWE3OGI0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uKSS_w9wrD8ZeqCSaJnoziLL0zW82w0cNRy9ZDS5g0Y"
        }
      };

      axios
        .request(options)
        .then((res) => setpopularPerson(res.data.results))
        .catch((err) => console.error(err));
    };
    popularData();
  }, [timeWindow]);

  const Contextvalue = {
    movies,
    upcoming,
    popularPerson,
    timeWindow,
    settimeWindow
  };
  return (
    <DataContext.Provider value={Contextvalue}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used inside dataprovider");
  }
  return context;
};
