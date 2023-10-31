import React from "react";
let listProduct = [
  {
    img: "img/product-2.jpg",
    name: "Apple new mac book 2015 March :P",
    price: "$899.00",
    sale: "$999.00",
  },
  {
    img: "img/product-2.jpg",
    name: "Apple new mac book 2015 March :P",
    price: "$899.00",
    sale: "$999.00",
  },
  {
    img: "img/product-2.jpg",
    name: "Apple new mac book 2015 March :P",
    price: "$899.00",
    sale: "$999.00",
  },
  {
    img: "img/product-2.jpg",
    name: "Apple new mac book 2015 March :P",
    price: "$899.00",
    sale: "$999.00",
  },
  {
    img: "img/product-2.jpg",
    name: "Apple new mac book 2015 March :P",
    price: "$899.00",
    sale: "$999.00",
  },
  {
    img: "img/product-2.jpg",
    name: "Apple new mac book 2015 March :P",
    price: "$899.00",
    sale: "$999.00",
  },
  {
    img: "img/product-2.jpg",
    name: "Apple new mac book 2015 March :P",
    price: "$899.00",
    sale: "$999.00",
  },
  {
    img: "img/product-2.jpg",
    name: "Apple new mac book 2015 March :P",
    price: "$899.00",
    sale: "$999.00",
  },
];

export default function Card() {
  return listProduct.map((product1, index) => (
    <div className="col-md-3 col-sm-6" key={index}>
      <div className="single-shop-product">
        <div className="product-upper">
          <img src={product1.img} alt="" />
        </div>
        <h2>
          <a href="">{product1.name}</a>
        </h2>
        <div className="product-carousel-price">
          <ins>{product1.price}</ins> <del>{product1.sale}</del>
        </div>
        <div className="product-option-shop">
          <a
            className="add_to_cart_button"
            data-quantity={1}
            data-product_sku=""
            data-product_id={70}
            rel="nofollow"
            href="/canvas/shop/?add-to-cart=70"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  ));
}
