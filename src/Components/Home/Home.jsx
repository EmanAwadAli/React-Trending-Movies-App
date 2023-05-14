import axios from "axios";
import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import Tvshow from "./TvShow";
import People from "./People";
import Loading from "../Loading/Loading";

export default function Home() {
  let [movies, setMovies] = useState([]);
  let [tv, setTv] = useState([]);
  let [people, setPeople] = useState([]);

  async function getTrending(mediaType, setMethod) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=89c1801b5759a261a76760615d6f0f40`
    );
    setMethod(data.results);
  }

  useEffect(() => {
    getTrending("movie", setMovies);
    getTrending("tv", setTv);
    getTrending("person", setPeople);
  }, []);

  return (
    <>
      {movies ? (
        <>
          <Movies movies={movies} />
          <Tvshow tv={tv} />
          <People people={people} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
