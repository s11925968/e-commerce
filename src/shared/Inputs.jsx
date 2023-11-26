import React from 'react'

export default function Inputs({type='text',id,name,title,value,error,onChange,onBlur,touched}) {
  return (
    <div className='w-100 text-center'>
      <div className="input-group mb-2">
      <label htmlFor={id} className="m-auto text-secondary d-block">
        {title}
      </label>
      <input type={type} id={id} name={name} value={value} onChange={onChange} onBlur={onBlur} className='w-100'/>
      {touched[name] &&error[name]&& <p className='text-danger d-block text-center'>{error[name]}</p>}
    </div>
    </div>
  )
}
