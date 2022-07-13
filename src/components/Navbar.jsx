import React from 'react';
// styles
import '../styles/navbar.scss';
import Items from './Items';

const Navbar = () => {
  return (
    <div className='navbarMain container-fluid d-none d-md-block d-lg-block text-white'>
        <div className='col-md-6 p-3 w-75 mx-auto align-items-center d-flex justify-content-between'>
            <div className='name'>
                <span>Welcome To My Portfolio</span>
            </div>
            <ul className='items d-flex w-50 justify-content-between'>
                <Items/>
            </ul>
        </div>
    </div>
  )
}

export default Navbar