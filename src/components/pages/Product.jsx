import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FaCheck } from "react-icons/fa";

const Product = ({ setData, Data }) => {

  const HandleInputProduct = (value, name) => {
    setData({
      ...Data,
      [name]: value,
    });
  };
  const InputNumber = ({ name }) => {
    return name === "Starter" ? (
      <button className="btn btn-primary w-10">Sign Up</button>
      ) : (
      <div className="bg-info rounded-2 d-flex">
        <label className="fs-7 m-2"> {"number"}</label>
        <input
        className="form-control"
        min={0}
        type="number"
        name="number"
        value={name === "Team" ? Data.Team : Data.Enterprise}
        onChange={(e) => {
          HandleInputProduct(e.target.value, name);
        }}
        />
      </div>
    );
  };

  function ProductCard({ title, price }) {
    return (
      <>
        <div class="card w-25 p-3 d-flex justify-content-center flex-column">
          <strong className="fs-4">{title}</strong>
          <div class="card-body">
            <p>$ {price}.00 {title==="Starter"? "":"per person"}</p>
          </div>
          <InputNumber name={title} />
        </div>
      </>
    );
  }

  function ListOfProducts() {
    return (
      <div>
        <div class="d-flex justify-content-center ">
          <h1 class="p-2 gap-5">PRODUCTS</h1>
        </div>
        <div class="d-md-flex justify-content-evenly">
          {/* card 1 */}
          <ProductCard title={"Starter"} price={0.0} />
          <ProductCard title={"Team"} price={200} />
          <ProductCard title={"Enterprise"} price={400} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <ListOfProducts />
      </div>

      <h2 className="display-6 text-center mb-4">Compare plans</h2>
      <div className="table-responsive">
        <table className="table text-center">
          <thead>
            <tr>
              <th style={{ width: "34%" }} />
              <th style={{ width: "22%" }}>Free</th>
              <th style={{ width: "22%" }}>Pro</th>
              <th style={{ width: "22%" }}>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-start">
                Public
              </th>
              <td>
                <FaCheck />
              </td>
              <td>
                <FaCheck />
              </td>
              <td>
                <FaCheck />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Private
              </th>
              <td />
              <td>
                <FaCheck />
              </td>
              <td>
                <FaCheck />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th scope="row" className="text-start">
                Permissions
              </th>
              <td>
                <FaCheck />
              </td>
              <td>
                <FaCheck />
              </td>
              <td>
                <FaCheck />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Sharing
              </th>
              <td />
              <td>
                <FaCheck />
              </td>
              <td>
                <FaCheck />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Unlimited members
              </th>
              <td />
              <td>
                <FaCheck />
              </td>
              <td>
                <FaCheck />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Extra security
              </th>
              <td />
              <td />
              <td>
                <FaCheck />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
