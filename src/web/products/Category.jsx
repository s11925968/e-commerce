import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'
import Loader from '../../shared/Loader';

export default function Category() {
  const {_id}=useParams();

  const getProduct=async()=>{
    const {data}=await axios.get(`${import.meta.env.VITE_URL_LINK}/products/category/${_id}`);
    return data.products;
  }

  const {data,isLoading}=useQuery('get_product',getProduct);
  if(isLoading){
    return <Loader />;
  }
  return (
    <div className='container'>
      <div className='row'>
      {
        
        data.length?data.map((product)=>
        <div className='col-md-4' key={product._id}>
          <img src={product.mainImage.secure_url}className='img-fluid'></img>
          <h2>{product.name}</h2>
          <Link to={`/product/${product._id}`}>details</Link>
        </div>
        ):"no data available"
      }
      </div>
      
    </div>
  )
}
