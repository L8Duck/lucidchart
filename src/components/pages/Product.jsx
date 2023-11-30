import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
//import Feature2 from "../../assets/feature 2.png";

const Product = ({setData, Data}) => {
  
  function IncludingProduct({name}) {
    console.log(name);
    var numRows = name === "Enterprise" ? 2: 1;
    switch (numRows) {
      case 2:
        return (
          <div>
            <h6 class="card-text">Includes {numRows} enterprise licenses:</h6>
            <div class="d-flex flex-column gap-2">
              <div class="card d-inline p-2">Oceny</div>
              <div class="card d-inline p-2">Oceny Plus</div>
            </div>
            
          </div>
        )
      default:
        return (
          <div>
            <h6 class="card-text">Includes {numRows} enterprise licenses:</h6>
            <div class="d-flex flex-column gap-2">
              <div class="card d-inline p-2">Oceny</div>
            </div>
          </div>
        )
    }
  }

  const HandleInputProduct =(value, name) => {
    setData({
      ...Data,
      [name]: value
    })
  }
  const InputNumber = ({name}) => {
    return (
        (name === "Starter") ? (
          <button className='btn btn-primary'>Seven Up</button>
        ) : (
          <input
            type="number"
            name="number"
            value={name === "Team" ? Data.Team : Data.Enterprise}
            onChange={(e) => {
              HandleInputProduct(e.target.value, name);
            }}
          />
        )

    );
  };
  
  function ProductCard({title, price}) {
    return (
      <>
        <div class="card w-25 p-3">
          <p className='fs-4'>{title}</p>
          <div class="card-body">
            <p>$ {price}.00</p>
          </div>
          <InputNumber name = {title}/>
        </div>
      </>
    )
  }

  function ListOfProducts() {
    return (
      <div>
        <div class="d-flex justify-content-center ">
          <h1 class='p-2 gap-5'>PRODUCTS</h1>
        </div>
        <div class="d-md-flex justify-content-evenly">
          {/* card 1 */}
          <ProductCard title={"Starter"} price={0.00}/>
          <ProductCard title={"Team"} price={5}/>
          <ProductCard title={"Enterprise"} price={10}/>
</div>
      </div>
    )
  }

  return (
    <div>
      <div><ListOfProducts /></div>

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
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#check" />
                </svg>
              </td>
              <td>
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#check" />
                </svg>
              </td>
              <td>
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#check" />
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Private
              </th>
              <td />
              <td>
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#check" />
                </svg>
              </td>
              <td>
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#check" />
                </svg>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th scope="row" className="text-start">
                Permissions
              </th>
              <td>
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#check" />
                </svg>
              </td>
              <td>
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#check" />
                </svg>
              </td>
              <td>
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#check" />
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Sharing
              </th>
              <td />
              <td>
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#check" />
                </svg>
              </td>
              <td>
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#check" />
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Unlimited members
              </th>
              <td />
              <td>
<svg className="bi" width={24} height={24}>
                  <use xlinkHref="#check" />
                </svg>
              </td>
              <td>
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#check" />
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Extra security
              </th>
              <td />
              <td />
              <td>
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#check" />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Product