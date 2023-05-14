import React from "react";
import MediaItem from "../MediaItem/MediaItem";

export default function Tvshow({ tv }) {
  return (
    <section className="tvshow py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex align-items-center ">
            <div>
              <div className="brdr w-25 mb-3"></div>
              <h2>
                Trending <br /> TvShow <br /> To Watch Now
              </h2>
              <p className="text-muted">Most Watched TvShow By Week</p>
              <div className="brdr w-100 mt-3"></div>
            </div>
          </div>
          {tv.slice(0, 10).map((tvshow) => (
            <div className="col-md-2 mb-2" key={tvshow.id}>
              <MediaItem media={tvshow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
