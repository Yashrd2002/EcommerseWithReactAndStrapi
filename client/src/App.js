
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product'
import Products from './Pages/Products/Products'

import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
function App() {


  const Layout = ()=>{
    return(
      <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    
        {
          path: "/",
          element: <Layout/>,
          children:[
            
              {
                path: "/",
                element: <Home />
              },
              {
                path: "/products/:id",
                element: <Products />
              },
              {
                path: "/product/:id",
                element: <Product />
              }
            
          ]
        },
      
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
