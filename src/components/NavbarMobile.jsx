import React from 'react';
import '../styles/navbarMobile.scss';

const NavbarMobile = () => {
  return (
    <nav className="navbar navbarMobile container-fluid d-block d-md-none d-lg-none text-white">
        <div className="container-fluid">
            <div className='name'>
                <span>Welcome To My Portfolio</span>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#habilidades">Habilidades</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#proyectos">Proyectos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#educacion">Educación</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavbarMobile