import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export const Nav = () => {

  return (
    <>
      <div className='d-flex text-center justify-content-around bg-primary'>
        
        <div>
          <Link className='text-danger fw-bolder fs-3' to='/'>Home</Link>
        </div>

        <div>
          <Link className='text-danger fw-bolder fs-3' to='/about'>About</Link>
        </div>

        <div>
          <Link className='text-danger fw-bolder fs-3' to='/api'>API DEV</Link>
        </div>

        <div>
          <Link className='text-danger fw-bolder fs-3' to='/SingTodo'> Todo</Link>
        </div>

        <div>
          <Link className='text-danger fw-bolder fs-3' to='/Todo'>Get Todo</Link>
        </div>

        <div>
          <Link className='text-danger fw-bolder fs-3' to='/formik'>Login</Link>
        </div>

        <div>
          <Link className='text-danger fw-bolder fs-3' to='/Increase'>O&CO2</Link>
        </div>

      </div>
    </>
  )
}
