import React, { useEffect, useState } from "react";
import MediaItem from "../MediaItem/MediaItem";
import axios from "axios";
import Loading from "./../Loading/Loading";
import Pagination from "./../Pagination/Pagination";

export default function People() {
  const [people, setPeople] = useState([]);

  let media_type = "person";

  let pages = new Array(10).fill(1).map((page, index) => index + 1);

  async function getPeople(page) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/person/popular?api_key=89c1801b5759a261a76760615d6f0f40&language=en-US&page=${page}`
    );

    setPeople(data.results);
  }

  useEffect(() => {
    getPeople(1);
  }, []);
  return (
    <section className="people py-3">
      <div className="container">
        <div className="row">
          {people ? (
            people.map((person) => (
              <div className="col-6 col-md-4 col-lg-3 mb-3" key={person.id}>
                <MediaItem media={person} media_type={media_type} />
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
        <Pagination pages={pages} getPage={getPeople} />
      </div>
    </section>
  );
}
