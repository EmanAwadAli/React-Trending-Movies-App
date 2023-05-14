import React from "react";
import MediaItem from "./../MediaItem/MediaItem";

export default function Movies({ movies }) {
  return (
    <section className="movies py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex align-items-center ">
            <div>
              <div className="brdr w-25 mb-3"></div>
              <h2>
                Trending <br /> Movies <br /> To Watch Now
              </h2>
              <p className="text-muted">Most Watched Movies By Week</p>
              <div className="brdr w-100 mt-3"></div>
            </div>
          </div>
          {movies.slice(0, 10).map((movie) => (
            <div className="col-md-2 mb-2" key={movie.id}>
              <MediaItem media={movie} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
