import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <Link  className='text-xl font-semibold' to="/men">Men</Link>
      <Link  className='text-xl font-semibold' to="/women">Women</Link>
      <Link  className='text-xl font-semibold' to="/kids">Kids</Link>
    </div>
  )
}

export default Product
