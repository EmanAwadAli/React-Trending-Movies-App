import React, { useEffect, useState } from "react";
import MediaItem from "../MediaItem/MediaItem";
import axios from "axios";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";

export default function TvShow() {
  const [tv, setTv] = useState([]);

  let media_type = "tv";

  let pages = new Array(10).fill(1).map((page, index) => index + 1);

  async function getTv(page) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=89c1801b5759a261a76760615d6f0f40&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`
    );

    setTv(data.results);
  }

  useEffect(() => {
    getTv(1);
  }, []);

  return (
    <section className="tvshow py-5">
      <div className="container">
        <div className="row">
          {tv ? (
            tv.map((tvShow) => (
              <div className="col-md-3 mb-3" key={tvShow.id}>
                <MediaItem media={tvShow} media_type={media_type} />
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
        <Pagination pages={pages} getPage={getTv} />
      </div>
    </section>
  );
}
