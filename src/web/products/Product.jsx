import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../shared/Loader';
import { useContext } from 'react';
import { CartConterxt } from '../context/Cart';
import { toast } from 'react-toastify';
export default function Product() {
  const navaigate=useNavigate();
  const {addToCartContext}=useContext(CartConterxt);
  const {_id}=useParams();
  const getProduct=async()=>{
    const {data}=await axios.get(`${import.meta.env.VITE_URL_LINK}/products/${_id}`)
    return data.product;
  }
  const {data,isLoading}=useQuery('product',getProduct);



  const addToCart=async(productId)=>{
    const res=await addToCartContext(productId);
    if(res.message=="success"){
      toast.success('add success', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        navaigate("/cart")
    }
  }
  if(isLoading){
    return <Loader />
  }
  return (
    <div className='container'>
      <div className='row'>
      {
        <div className='col-lg-4 text-center'>
          <img src={data.mainImage.secure_url} className='img-fluid'></img>

          <h2>{data.name}</h2>
          <p>
            {data.price}
          </p>
          <button className='btn btn-outline-info' onClick={()=>addToCart(data._id)}>Add to cart</button>
          </div>
      }
      </div>

    </div>
  )
}
