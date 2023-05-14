import React, { useEffect, useState } from "react";
import MediaItem from "../MediaItem/MediaItem";
import axios from "axios";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  let media_type = "movie";

  let pages = new Array(10).fill(1).map((page, index) => index + 1);

  async function getMovies(page) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=89c1801b5759a261a76760615d6f0f40&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`
    );

    setMovies(data.results);
  }

  useEffect(() => {
    getMovies(1);
  }, []);
  return (
    <section className="movies py-3">
      <div className="container">
        <div className="row">
          {movies ? (
            movies.map((movie) => (
              <div className="col-6 col-md-4 col-lg-3 mb-3" key={movie.id}>
                <MediaItem media={movie} media_type={media_type} />
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
        <Pagination pages={pages} getPage={getMovies} />
      </div>
    </section>
  );
}
