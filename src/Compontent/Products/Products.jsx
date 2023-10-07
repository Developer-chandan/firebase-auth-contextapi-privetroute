// import React from 'react';

import { useEffect, useState } from "react";
import Product from "../Product/Product";





const Products = () => {

    const [products, setProducts] = useState([]);


    useEffect(()=>{
        fetch('products.json')
        .then((res) =>res.json())
        .then(data => setProducts(data))
        
    },[])
   
   
  
    

    return (
        <div className="grid grid-cols-3 gap-4">

            {
                products.map(product => <Product key={product.id}  product={product}></Product>)
            }
         
        </div>
    );
};

export default Products;