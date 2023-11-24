import React from 'react'

export default function Inputs({type='text',id,name,title,value,error,onChange,onBlur,touched}) {
  return (
    <>
    <div className='input-group mb-4'>
      <label htmlFor={id}>{title}</label>
      <input type={type} name={name} value={value} id={id} onChange={onChange} className='form-control' onBlur={onBlur}/>
      {touched[name] && error[name] && <p className='text-danger'>{error[name]}</p>}
      </div>
    </>
  )
}
