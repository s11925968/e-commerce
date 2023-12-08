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
  const token = localStorage.getItem("userToken");
  const getUserData=async()=>{
      const { data } = await axios.get(
        `${import.meta.env.VITE_URL_LINK}/user/profile`,
        {
          headers: {
            Authorization:
              `Tariq__${token}`, 
          },
        });
        console.log(data);
        setUserData(data.user);
  }
  useEffect(()=>{
    if(localStorage.getItem("userToken")){
      saveCurrentUser();
    }
  },[]);
  useEffect(()=>{
    getUserData();
  },[])
  return <userContext.Provider value={{userToken,setUserToken,userData,setUserData}}>
    {children}
  </userContext.Provider>


}