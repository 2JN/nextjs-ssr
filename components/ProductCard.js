import React from "react";
import Link from "next/link";

const ProductCard = ({ id, name, description }) => (
  <div className="card mb-4 shadow-sm">
    <svg
      className="bd-placeholder-img card-img-top"
      width="100%"
      height="225"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
      role="img"
      aria-label="Placeholder: Thumbnail"
    >
      <title>{name}</title>
      <rect width="100%" height="100%" fill="#55595c"></rect>
      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
        Thumbnail
      </text>
    </svg>
    <div className="card-body">
      <p className="card-text">{description}</p>
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group">
          <Link href="products/[id]" as={`/products/${id}`}>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              View
            </button>
          </Link>
        </div>
        <small className="text-muted">9 mins</small>
      </div>
    </div>
  </div>
);

export default ProductCard;
