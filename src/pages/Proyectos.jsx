import React from 'react';
import SystemImg from '../assets/img/system-easy.png';
import ErrorImg from '../assets/img/error-404-img.png';
import FoodsImg from '../assets/img/magnific-foods-img.png';
import '../styles/proyectos.scss';


const Proyectos = () => {
  return (
    <div className='proyectos row m-0 p-0'>
    <h3 className='text-center text-white mt-5'>Proyectos y Experiencia</h3>
      <div className='col-md-6 d-flex justify-content-around mt-4'>
        
        <div className="card card-proyect mb-4">
          <img width={50} height={150} src={SystemImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">System Inventory</h5>
            <span className="badge text-bg-primary m-1">React Js</span>
            <span className="badge text-bg-success m-1">Node Js</span>
            <span className="badge text-bg-dark m-1">Express</span>
            <span className="badge text-bg-success m-1">Mongo Db</span>
            <p className="card-text text-secondary">Se trata de un crud donde podemos agregar equipos y agregar mantenimientos a dicho equipo.</p>
            <p>Credenciales: admin@miadmin.com / 123456</p>
            <div className='d-flex justify-content-around'>
              <a href="https://client-system-easy.onrender.com/" rel="noreferrer noopener" target='_blank' className="btn btn-proyect">Demo</a>
              <a href="https://github.com/daniel2710/system-easy-crud" rel="noreferrer noopener" target='_blank' className="btn btn-proyect">Code</a>
            </div>
          </div>
        </div>

        <div className="card card-proyect mb-4">
          <img width={50} height={150} src={FoodsImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Landing Page - Magnific Foods</h5>
            <span className="badge text-bg-primary m-1">React Js</span>
            <p className="card-text text-secondary">Pagina inicial de un e-commerce de comidas rapidas.</p>
            <div className='d-flex justify-content-around'>
              <a href="https://magnific-foods.netlify.app/" rel="noreferrer noopener" target='_blank' className="btn btn-proyect">Demo</a>
              <a href="https://github.com/daniel2710/magnific-foods" rel="noreferrer noopener" target='_blank' className="btn btn-proyect">Code</a>
            </div>
          </div>
        </div>

      </div>


      <div className='col-md-6 d-flex justify-content-around mt-4'>
      <div className="card card-proyect mb-4">
          <img width={50} height={150} src={ErrorImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Error 404 page</h5>
            <span className="badge text-bg-primary m-1">React Js</span>
            <p className="card-text text-secondary">Pagina simple de error 404, realizado en html y css.</p>
            <div className='d-flex justify-content-around'>
              <a href="https://mi-error-404.netlify.app/" rel="noreferrer noopener" target='_blank' className="btn btn-proyect">Demo</a>
              <a href="https://github.com/daniel2710/error-404" rel="noreferrer noopener" target='_blank' className="btn btn-proyect">Code</a>
            </div>
          </div>
        </div>

        <div className="card card-proyect mb-4">
          <img width={50} height={150} src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/602f2109a787c146dcbe2b66_601b1c1f7567a7399353fe47_traackr.jpeg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">en proceso...</h5>
            <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='d-flex justify-content-around'>
              <a href="/" className="btn btn-proyect">Demo</a>
              <a href="/" className="btn btn-proyect">Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proyectos;