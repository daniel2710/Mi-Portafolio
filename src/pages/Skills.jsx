import React from 'react';
import '../styles/skills.scss';

const Skills = () => {
  return (
    <div id='habilidades' className='row text-white row-skills p-0 m-0'>
      <div>
          <h3 className='text-center m-4'>Tecnologías</h3>
      </div>
      <div className='col-md-6'>
        <div className='skills-container text-white'>
            <h3>
              Frameworks/Librerias
            </h3>

            <div>
                <h5>React Js</h5>
              <div className="progress mb-4">
                <div className="progress-bar w-75" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
                <h5>Node Js / Express / Mongoose</h5>
              <div className="progress mb-4">
                <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <h3>
              Bases De Datos
            </h3>
            <div>
              <h5>Mongo Db</h5>
              <div className="progress mb-4">
                <div className="progress-bar w-25" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
        </div>


            <h3>
              Herramientas
            </h3>
            <div>
                <h5>Git/Github</h5>
              <div className="progress mb-4">
                <div className="progress-bar w-50" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
        </div>
      </div>



      <div className='col-md-6'>
        <div className='skills-container text-white'>
            <h3>
              Lenguajes
            </h3>
            <div>
                <h5>Javascript</h5>
              <div className="progress mb-4">
                <div className="progress-bar w-75" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <h3>
              Styles
            </h3>
            <div>
              <h5>Css</h5>
              <div className="progress mb-4">
                <div className="progress-bar w-75" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h5>Bootstrap</h5>
              <div className="progress mb-4">
                <div className="progress-bar w-75" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills