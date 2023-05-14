import React from "react";
import { Link } from "react-router-dom";
import style from "./MediaItem.module.css";

export default function MediaItem({ media, media_type }) {
  let mediaType = media.media_type ? media.media_type : media_type;
  return (
    <Link
      to={`/mediadetails/${media.id}/${mediaType}`}
      className={style.media_item}
    >
      <div className={style.image}>
        <img
          className="img-fluid"
          src={`https://image.tmdb.org/t/p/w500/${
            media.poster_path ? media.poster_path : media.profile_path
          }`}
          alt=""
        />
      </div>
      <div className="details pt-2">
        <h3 className={style.title}>
          {media.title}
          {media.name}
        </h3>
        {media.vote_average ? (
          <span className={style.vote_avg}>
            {media.vote_average.toFixed(1)}
          </span>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
}
