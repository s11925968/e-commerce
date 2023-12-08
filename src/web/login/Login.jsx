import React, { useContext } from 'react'
import Inputs from '../../shared/Inputs';
import { useFormik } from 'formik';
import {registerSchema} from '../../shared/Validate.jsx'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../context/User.jsx';
export default function Login() {

  const navigate=useNavigate();
  const {userToken,setUserToken}=useContext(userContext);

  if(userToken!=null){
    navigate(-1);
  }
  
  const initialValues={
    email:'',
    password:'',
  }

  const onSubmit=async users=>{
    const {data}=await axios.post("https://ecommerce-node4.vercel.app/auth/signin",users);
    if(data.message=="success"){
      localStorage.setItem("userToken",data.token);
      setUserToken(data.token);
      formik.resetForm();
      toast.success('login success', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        navigate('/');
    }
  }
  const formik=useFormik({
    initialValues,
    onSubmit,
    //validationSchema:registerSchema,
  });
  
  const inputs=[
    {
      id:'email',
      type:'email',
      name:'email',
      title:'user email',
      value:formik.values.email,
    },
    {
      id:'password',
      type:'password',
      name:'password',
      title:'user Password',
      value:formik.values.password,
    },
  ];
  const renderInput =inputs.map((input,index)=>
  <Inputs 
  type={input.type}
  key={index}
  id={input.id}
  name={input.name}
  title={input.title}
  value={input.value}
  error={formik.errors}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  touched={formik.touched}
  /> 

  )
  return (
    <div className="container d-flex justify-content-center align-items-center w-50 vh-100">
      <div>
      <div className="phone-width">
        <h2 className='text-center'>login</h2>
        <form onSubmit={formik.handleSubmit}>
          {renderInput}
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={!formik.isValid}
          >
            submit
          </button>
          <Link to="/auth/sendcode">forgot password</Link>
        </form>
      </div>
      </div>
      
    </div>
  );
}
