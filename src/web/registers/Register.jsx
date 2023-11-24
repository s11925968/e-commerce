import React from 'react'
import Inputs from '../../shared/Inputs';
import { useFormik } from 'formik';
import {registerSchema} from '../../shared/Validate.jsx'
import axios from 'axios';
export default function Register() {

  const initialValues={
    userName:'',
    email:'',
    password:'',
    image:'',
  }
  const onSubmit=async users=>{
    const formData=new FormData();
    formData.append("userName",users.userName);
    formData.append("email",users.email);
    formData.append("password",users.password);
    formData.append("image",users.image);
    const {data}=await axios.post("https://ecommerce-node4.vercel.app/auth/signup",formData);
    
  }
  const formik=useFormik({
    initialValues,
    onSubmit,
    validationSchema:registerSchema,
  });
  const handelFileChange=(event)=>{
    formik.setFieldValue('image',event.target.files[0]);
  }
  
  const inputs=[
    {
      id:'userName',
      type:'text',
      name:'userName',
      title:'User Name',
      value:formik.values.userName
    },
    {
      id:'password',
      type:'password',
      name:'password',
      title:'user Password',
      value:formik.values.password,
    },
    {
      id:'email',
      type:'email',
      name:'email',
      title:'user email',
      value:formik.values.email,
    },
    {
      id:'image',
      type:'file',
      name:'image',
      title:'user image',
      onChange:handelFileChange,
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
  onChange={input.onChange || formik.handleChange}
  onBlur={formik.handleBlur}
  touched={formik.touched}
  /> 

  )
  return (
    <div className="container">
      <h2>create account</h2>
      <form onSubmit={formik.handleSubmit} enctype="multipart/form-data">
        {renderInput}
        <button type="submit" disabled={!formik.isValid}>
          Submit
        </button>
      </form>
    </div>
  );
}
