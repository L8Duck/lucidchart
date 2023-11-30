import React from 'react'
//import { BsCartCheckFill } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
const OrderItems = ({type,title,price,number, setData,Data}) => {
  const HandleDeleteItems =(name) => {
    setData((prevData) => ({
      ...prevData,
      [name]: 0,
    }));
  }
  if (number !== 0)
  return(
    <tr>
        <td>1</td>
        <td>{title}</td>
        <td>Oceany license</td>
        <td>{price}</td>
        <td>{number}</td>
        <td>{number * price}</td>
        <td><FaRegTrashAlt className='link text-danger'
          onClick={() => HandleDeleteItems(type)}
        /></td>
    </tr> 
    ) 
  }
  const ListOrderItems = ({mapData, setData,Data}) => {
    return mapData.map((key, index) => (
      <OrderItems key={index}
       type={key.type} 
       title={key.title} 
       price={key.price} 
       number={key.number} 
       setData={setData} 
       Data={Data}
       />
    ));
  }
const Order = ({setData,Data}) => {
  const OrderData = {
    Team:{
      title:"Oceany Team",
      number: Data.Team,
      price:200,
    },
    Enterprise:{
      title:"Oceany Enterprise",
      number: Data.Enterprise,
      price:400,
    }
  }
  const mappedOrderData = Object.entries(OrderData).map(([key, value]) => ({
    type: key,
    ...value,
  }));
  const Total = mappedOrderData.reduce((acc, item) => acc + item.number * item.price, 0);
  const Discount = 5;
  // Order title
  const CurrentOrderList = () => {
    return(
      <div class="shadow p-5 mb-4 bg-body-secondary rounded-3">
        <h4 class="w-25">Current Order</h4>
        <div class="table-responsive small">
          <table class="table table-hover">
            <thead class="table-striped">
              <tr>
                <th scope="col ">#</th>
                <th scope="col ">Type</th>
                <th scope="col ">Products</th>
                <th scope="col ">Unit price</th>
                <th scope="col ">Number</th>
                <th scope="col ">Total</th>
                <th scope="col "></th>
              </tr>
            </thead>
            <tbody class='w-100 '>
              <ListOrderItems mapData={mappedOrderData} setData={setData} Data={Data}/>
            </tbody>
          </table>

          <div class="container text-center">
            <div class="row row-cols-auto ">
              <div class="col-sm-3"></div>
              <div class="col-sm-3"></div>
              <div class="col-sm-4 bg-bo"><h6>Discount: <strong className='text-info-emphasis'>{Discount}%</strong> </h6></div>
              <div class="col-sm-2 bg-bo"><h6>Total Money <strong className='text-info-emphasis'>{Total *(100-Discount)/100} $</strong> </h6></div>
            </div>
          </div>

          <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-info btn-sm m-1">Pay now</button>
              <button type="button" class="btn btn-warning  btn-sm m-1"
                onClick={() => setData({
                  Team:0,
                  Enterprise:0,
                })}
                >
                Discard
                </button>
          </div>
        </div>
      </div>
    )
  }

  const OrderedList = () => {
    return (
      <>
        <div class="shadow p-5 mb-4 bg-body-tertiary rounded-3">
          <h4 class="w-25">Ordered List</h4>
          <div class="table-responsive small">
            <table class="table table-hover">
              <thead class="bg-secondary">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product's Name</th>
                  <th scope="col">Products</th>
                  <th scope="col">Bought</th>
                  <th scope="col">Until</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody class='w-100'>
                <tr>
                  <td>1</td>
                  <td>Oceany Team</td>
                  <td>Oceany license</td>
                  <td>30/11/2023</td>
                  <td>30/11/2024</td>
                  <td>Still valid</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    )
  }

  const OrderHeader = () => {
    return(
      <>
        <header class="py-3 mb-4 border-bottom">
          <div class="container d-flex justify-content-center">
              <h1 class="p-2">ORDER</h1>
          </div>
        </header>
      </>
    )
  }
  
    

  return (
    <>
      {/* Header */}
      <OrderHeader />

      {/* Current ordered list */}
      <CurrentOrderList />

      {/* Ordered List */}
      <OrderedList />

    </>
  )
}

export default Order