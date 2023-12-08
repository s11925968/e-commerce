import React from 'react'
import Inputs from '../../shared/Inputs';
import { useFormik } from 'formik';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
export default function Sendcode() {
  const navigate=useNavigate();
  const initialValues={
    email:'',
  }
  const onSubmit=async users=>{
    const {data}=await axios.patch(`${import.meta.env.VITE_URL_LINK}/auth/sendcode`,users);
    if(data.message=="success"){
        navigate('/auth/forgotPassword')
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
      <form onSubmit={formik.handleSubmit} >
        {renderInput}
        <button type="submit" className='w-100'>
          Send Code
        </button>
      </form>
      </div>
    </div>
  );
}
