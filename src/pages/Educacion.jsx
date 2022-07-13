import React from 'react';
import '../styles/educacion.scss';

const Educacion = () => {
  return (
    <div className='educacion row p-0 m-0'>
      <h3 className='text-light text-center mb-5 mt-5'>Educación y Certificaciones</h3>
      <div className='col-md-6'>

        <div className="card card-education mx-auto mt-4">
          <div className="card-header">Servicio Nacional De Aprendizaje (SENA)</div>
          <div className="card-body">
            <h5 className="card-title">Técnologo en analisis y desarrollo de sistemas de información</h5>
            <p className="card-text text-secondary">Desarrollar y testear aplicaciones en tecnologías de desarrollo de software. Utilizar técnicas y patrones de construcción de sistemas de información. Garantizar la calidad de los sistemas desarrollados, Elaborar textos y resúmenes técnicos acerca de los procesos de desarrollo de aplicaciones.</p>
          </div>
        </div>

      </div>

      <div className='col-md-6'>

      <div className="card card-education mx-auto mb-5 mt-4">
          <div className="card-header">
            Corporación Educativa Del Litoral
          </div>
          <div className="card-body">
            <h5 className="card-title">Técnico profesional en programación web</h5>
            <p className="card-text text-secondary">El Técnico Profesional de Programación Web, está en capacidad de Programar e Implementar aplicaciones de “Software” para Web y Dispositivos Móviles, utilizando diferentes lenguajes de programación acordes los objetivos establecidos para su funcionamiento y visualización.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Educacion