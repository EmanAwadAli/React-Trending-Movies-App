import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./MediaDetails.module.css";
import Loading from "../Loading/Loading";

export default function MediaDetails() {
  let [mediaDetails, setMediaDetails] = useState(null);
  let { id, type } = useParams();
  async function getMediaDetails() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=89c1801b5759a261a76760615d6f0f40&language=en-US`
    );

    setMediaDetails(data);
  }

  useEffect(() => {
    getMediaDetails();
  }, []);

  return (
    <div className={`${style.media_details} py-3`}>
      <div className="container">
        {mediaDetails ? (
          <div className="row">
            <div className="col-md-3">
              <div className="image rounded-3 overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src={`https://image.tmdb.org/t/p/w500/${
                    mediaDetails.poster_path
                      ? mediaDetails.poster_path
                      : mediaDetails.profile_path
                  }`}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-9">
              <div className="details py-3 py-md-0">
                <h2 className={style.title}>
                  {mediaDetails.title}
                  {mediaDetails.name}
                </h2>

                {mediaDetails.birthday ? (
                  <span className="d-block mb-2 text-muted">
                    <strong>Birthday : </strong>
                    {mediaDetails.birthday}
                  </span>
                ) : (
                  ""
                )}

                <p className="mb-2 text-muted">
                  {mediaDetails.overview}
                  {mediaDetails.biography}
                </p>
                {mediaDetails.vote_average ? (
                  <span className="d-block mb-2 text-muted">
                    <strong>Vote Avarage : </strong>
                    {mediaDetails.vote_average}
                  </span>
                ) : (
                  ""
                )}

                {mediaDetails.vote_count ? (
                  <span className="d-block text-muted">
                    <strong>Vote Count : </strong>
                    {mediaDetails.vote_count}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
