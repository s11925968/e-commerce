import { useEffect, useState } from "react";
import  { createContext } from "react";
import axios from "axios";
export const CartConterxt=createContext(null);

export function CartConterxtProvider({children}){
  const  addToCartContext=async (productId)=>{
      const token=localStorage.getItem('userToken');
      const { data } = await axios.post(
        `${import.meta.env.VITE_URL_LINK}/cart`,
        {productId,quantity:1}
        ,
        {
          headers: {
            Authorization:
              `Tariq__${token}`, 
          },
        });
        return data;
  }
  const getCartContext=async()=>{
      const token=localStorage.getItem('userToken');
      const {data}=await axios.get(`${import.meta.env.VITE_URL_LINK}/cart`,
      {
        headers:{
          Authorization:`Tariq__${token}`,
        }
      });
      return data;
      
  }
  const removeCartContext=async (productId)=>{
      const token=localStorage.getItem('userToken');
      const {data}=await axios.patch(`${import.meta.env.VITE_URL_LINK}/cart/removeItem`,
      {
        productId
      },
      {
        headers:{
          Authorization:`Tariq__${token}`,
        }
      });
      return data;
  }
  return <CartConterxt.Provider value={{addToCartContext,getCartContext,removeCartContext}}  >
    {children}
  </CartConterxt.Provider> ;
}  