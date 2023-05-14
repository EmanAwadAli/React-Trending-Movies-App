import React from "react";
import MediaItem from "./../MediaItem/MediaItem";

export default function Movies({ movies }) {
  return (
    <section className="movies py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3 col-xl-4 d-flex align-items-center mb-4 mb-md-0 ">
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
            <div
              className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2"
              key={movie.id}
            >
              <MediaItem media={movie} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
