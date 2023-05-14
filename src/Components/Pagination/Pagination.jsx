import React from "react";
import { Link } from "react-router-dom";

export default function Pagination({ pages, getPage }) {
  return (
    <nav className="py-5 d-flex align-items-center justify-content-center">
      <ul className="pagination pagination-sm">
        {pages.map((page) => (
          <li
            className="page-item m-1"
            onClick={() => getPage(page)}
            key={page}
          >
            <Link className="page-link bg-transparent text-white">{page}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
