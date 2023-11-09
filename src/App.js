import React, {useState} from 'react'

import Home from './components/pages/Home'
import Product from './components/pages/Product'
import Introduce from './components/pages/Introduce'
import Order from './components/pages/Order'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Contact from './components/pages/Contact'

import Navigation from './components/Navigation'
import Footer from './components/Footer'

const App = () => {
  const [Page, setPage] = useState("home")
  let content; 
  switch (Page) {
    case "home":
      content = <Home/>;
      break;
    case "product":
      content = <Product/>;
      break;
    case "introduce":
      content = <Introduce />;
      break;
    case "order":
      content = <Order/>;
      break;
    case "login":
      content = <Login/>;
      break;
    case "register":
      content = <Register />;
      break;
    case "contact":
      content = <Contact />;
      break;       
    default:
      content = <Home />;
      break;
  }
  return (
    <div>
      <Navigation 
      Page = {Page}
      onPageChange = {setPage}/>
      {content}
      <Footer/>
    </div>
  );
}

export default App