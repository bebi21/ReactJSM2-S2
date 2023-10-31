//import TH1 from "./components/TH1";
//import TH2 from "./components/TH2";
// import BT4 from "./components/BT4";
// import BT5 from "./components/BT5";
// import BT6 from "./components/BT6";
// BT7
/* import Order_product from "./components/BT7/Orderproduct";
import Pay from "./components/BT7/Pay";

function App() {
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: " #eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <Order_product />
                  <Pay />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 

export default App;*/

// BT8
// import React from "react";
// import User from "./components/BT8/User";

// export default function App() {
//   return (
//     <>
//       <table>
//         <caption>MANAGER USER</caption>
//         <thead>
//           <tr>
//             <th></th>
//             <th>NAME</th>
//             <th>AGE</th>
//             <th>EMAIL</th>
//             <th>DATEBIRTH</th>
//             <th>MANAGE</th>
//             <th>ACTION</th>
//           </tr>
//         </thead>
//         <User />
//       </table>
//     </>
//   );
// }

//BT9
// chú ý phần css của index  phải vứt  lên  phần public
import Footer_top_area from "./components/BT9/Footer-top-area";
import Header_area from "./components/BT9/Header-area";
import Mainmenu from "./components/BT9/Mainmenu";
import Product_big_title_area from "./components/BT9/Product-big-title-area";

import Single_product_area from "./components/BT9/Single-product-area";
export default function name() {
  return (
    <>
      <Header_area />
      <Mainmenu />
      <Product_big_title_area />
      <Single_product_area />
      <Footer_top_area />
    </>
  );
}
