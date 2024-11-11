import React from 'react'
import { logo } from '../constants'

const RestrictPage = () => {
  return (
    <div className='bg-whiteSmoke500 h-screen flex justify-center items-center'>
      <div>
         <h2 className='text-5xl font-bold text-center my-6'>No Permission</h2>
         <p className='text-xl'>Sorry, But you don’t have permission to acces this page </p>
         <p className='text-xl text-center'>Go back to <a href="/cms/login" className='text-blue-600'>Previous Page</a></p>
         <img src={logo.restrict} alt="restrict" className='scale-90 mx-auto' />
      </div>
    </div>
  )
}

export default RestrictPage