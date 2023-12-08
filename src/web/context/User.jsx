import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export let userContext=createContext();

export function UserContextProvider({children}){


  const [userToken,setUserToken] = useState(null);
  const saveCurrentUser = () => {
    const token = localStorage.getItem("userToken");
    const decode = jwtDecode(token);
    setUserToken(decode);
  };
  const [userData,setUserData]=useState(null);
  const getUserData=async()=>{
      try{
        const token = localStorage.getItem("userToken");
        const { data } = await axios.get(
          `${import.meta.env.VITE_URL_LINK}/user/profile`,
          {
            headers: {
              Authorization:
                `Tariq__${token}`, 
            },
          });
          setUserData(data.user);
      }
      catch(error){
        console.log(error);
      }
    
    
  }
  useEffect(()=>{
    getUserData();
    if(localStorage.getItem("userToken")){
      saveCurrentUser();
    }
  },[])
  useEffect(()=>{
    getUserData();
  },[userToken]);
  return <userContext.Provider value={{userToken,setUserToken,userData,setUserData}}>
    {children}
  </userContext.Provider>


}