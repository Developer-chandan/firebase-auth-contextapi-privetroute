
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from './Compontent/Layout/Layout.jsx';
import Home from './Compontent/Home/Home.jsx';
import Login from './Compontent/Login/Login.jsx';
import Register from './Compontent/Register/Register.jsx';
import Products from './Compontent/Products/Products.jsx';
import React from 'react';
import AddContext from './provider/AddContext';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
     {
      path: "/",
      element: <Home></Home>
     },
     {
      path:"/login",
      element: <Login></Login>
     },
     {
      path: "/register",
      element: <Register></Register>
     },
     {
      path: "/product",
      element: <Products></Products>
     }

    ]  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AddContext>
      <RouterProvider router={router} />
      </AddContext>
  
  </React.StrictMode>,
)
