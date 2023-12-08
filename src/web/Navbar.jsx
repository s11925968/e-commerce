import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from './context/User';
import Loader from '../shared/Loader';
import { useQuery } from 'react-query';
import { CartConterxt } from './context/Cart';

export default function Navbar() {
  let {userToken,setUserToken,userData,setUserData}=useContext(userContext);
  
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.removeItem("userToken");
    setUserToken(null);
    //setUserData(null);
    navigate('/');
  }
  const {getCartContext}=useContext(CartConterxt);
  const getCart=async()=>{
    const res=await getCartContext();
    return res;
  }
  const {data,isLoading}=useQuery("getCart",getCart);
  if(isLoading){
    return <Loader />
  }
  return (
    <div>
      {" "}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            T-shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/categories">
                  Categories
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              {userToken &&<li className="nav-item">
                <Link className="nav-link" to="/cart">
                  {data.count}
                  <span className='ps-1'>cart</span>
                </Link>
              </li>
              }
              
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* {userData!=null?userData.userName:'account'} */}
                  account
                </a>                
                <ul className="dropdown-menu ">
                  {!userToken?
                  <>
                    <li>
                    <Link className="dropdown-item" to="/register">
                      register
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/login">
                      login
                    </Link>
                  </li>
                  </>
                  :
                  <>
                    <li>
                    <Link className="dropdown-item" to="/profile">
                      profile
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" onClick={logout}>
                      logout
                    </Link>
                  </li>
                  </>
                  }
                </ul>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
