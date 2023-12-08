import { useState } from "react";
import  { createContext } from "react";
import axios from "axios";
export const CartConterxt=createContext(null);

export function CartConterxtProvider({children}){
  const  addToCartContext=async (productId)=>{
    try{
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
    catch(error){
      console.log(error);
    }

  }
  const getCartContext=async()=>{
    try{
      const token=localStorage.getItem('userToken');
      const {data}=await axios.get(`${import.meta.env.VITE_URL_LINK}/cart`,
      {
        headers:{
          Authorization:`Tariq__${token}`,
        }
      });
      return data;
      
    }catch(error){
      (error);
    }
  }
  return <CartConterxt.Provider value={{addToCartContext,getCartContext}}  >
    {children}
  </CartConterxt.Provider> ;
}  