import React, { useEffect, useState } from 'react';

const Product = (props) => {
  
const {id, img, name, category, seller, price, ratings} = props.product;



const handleDetails = () => {
  console.log('clicking......');
}


  return (
    <div>
      <div className="card w-100 bg-base-100 shadow-xl">
        <figure><img src={img} className='h-[280px]' alt="Shoes" /></figure>
        <div className="card-body text-left">
          <h2 className="card-title text-sm">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
        <div className='flex justify-between'>
        <p className='text-yellow-500'>Price: <span className='text-light-500'> {price}</span> </p>
        <p className='text-yellow-500'>Ratings: <span className='text-light-500'> {ratings}</span> </p>
       
        </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline bg-whete-800 text-red-500">{category}</div>
            <div className="badge badge-outline">{seller}</div>
          </div>
          <button className='btn btn-primary mt-5' onClick={() => handleDetails()}>View Product</button>
        </div>
      </div>
    </div>
  );
};

export default Product;