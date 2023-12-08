import React from 'react'
import Inputs from '../../shared/Inputs';
import { useFormik } from 'formik';
import {registerSchema} from '../../shared/Validate.jsx'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function Forgot() {
  const navigate=useNavigate();
  const initialValues={
    email:'',
    password:'',
    code:'',
  }
  const onSubmit=async users=>{
    const {data}=await axios.patch(`${import.meta.env.VITE_URL_LINK}/auth/forgotPassword`,users);
    if(data.message=="success"){
      toast.success('you success to change password', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:"light",
        });
        navigate('/')
    }
  }
  const formik=useFormik({
    initialValues,
    onSubmit,
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
    {
      id:'code',
      type:'text',
      name:'code',
      title:'user code',
      value:formik.values.code,
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
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div>
      <h2 className='text-center'>create account</h2>
      <form onSubmit={formik.handleSubmit}>
        {renderInput}
        <button type="submit" disabled={!formik.isValid} className='w-100'>
          Submit
        </button>
      </form>
      </div>
    </div>
  );
}
