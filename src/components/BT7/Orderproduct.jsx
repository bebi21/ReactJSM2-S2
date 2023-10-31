import React from "react";
import Product from "./Product";

export default function Order_product() {
  return (
    <div className="col-lg-7">
      <h5 className="mb-3">
        <a href="#!" className="text-body">
          <i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping
        </a>
      </h5>
      <hr />

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <p className="mb-1">Shopping cart</p>
          <p className="mb-0">You have 4 items in your cart</p>
        </div>
        <div>
          <p className="mb-0">
            <span className="text-muted">Sort by:</span>
            <a href="#!" className="text-body">
              price <i className="fas fa-angle-down mt-1"></i>
            </a>
          </p>
        </div>
      </div>
      <Product />
    </div>
  );
}
