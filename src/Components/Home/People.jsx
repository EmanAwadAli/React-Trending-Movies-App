import React from "react";
import MediaItem from "./../MediaItem/MediaItem";

export default function People({ people }) {
  return (
    <section className="people py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3 col-xl-4 d-flex align-items-center mb-4 mb-md-0 ">
            <div>
              <div className="brdr w-25 mb-3"></div>
              <h2>
                Trending <br /> People <br /> To Watch Now
              </h2>
              <p className="text-muted">Most Trending People By Week</p>
              <div className="brdr w-100 mt-3"></div>
            </div>
          </div>
          {people.slice(0, 10).map((person) => (
            <div
              className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2"
              key={person.id}
            >
              <MediaItem media={person} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
