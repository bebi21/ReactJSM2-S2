import React from "react";
let listProduct = [
  {
    id: 0,
    img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
    name: "Iphone 11 pro",
    infor: "256GB, Navy Blue",
    quantity: 2,
    price: "$900",
  },
  {
    id: 1,
    img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp",
    name: "Samsung galaxy Note 10",
    infor: "256GB, Navy Black",
    quantity: 2,
    price: "$900",
  },
  {
    id: 2,
    img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp",
    name: "Canon EOS M50",
    infor: "Onyx Black",
    quantity: 1,
    price: "$1199",
  },
  {
    id: 3,
    img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp",
    name: "MacBook Pro",
    infor: "1TB, Graphite",
    quantity: 1,
    price: "$1799",
  },
];
// trong function
// sau return  là giao  diện
// trước  return là logic
// phải có key  khi dùng hàm map () và lấy index của là giá trị  của key
export default function Product() {
  return (
    <>
      {listProduct.map((item, index) => (
        <div className="card mb-3" key={index}>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div>
                  <img
                    src={item.img}
                    className="img-fluid rounded-3"
                    alt="Shopping item"
                    style={{ width: "65px" }}
                  />
                </div>
                <div className="ms-3">
                  <h5>{item.name}</h5>
                  <p className="small mb-0">{item.infor}</p>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                <div style={{ width: "50px" }}>
                  <h5 className="fw-normal mb-0">{item.quantity}</h5>
                </div>
                <div style={{ width: "80px" }}>
                  <h5 className="mb-0">{item.price}</h5>
                </div>
                <a href="#!" style={{ color: "#cecece" }}>
                  <i className="fas fa-trash-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
