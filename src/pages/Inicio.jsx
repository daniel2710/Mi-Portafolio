import React, {} from "react";
import CV from '../assets/pdf/CV-DANIEL DE ÁVILA.pdf';
import "../styles/inicio.scss";
import {AiFillLinkedin, AiFillTwitterCircle, AiFillGithub} from 'react-icons/ai';
import {ImLocation} from 'react-icons/im';
import {SiGmail} from 'react-icons/si';
import Imagen from '../assets/img/hacker-imagen.png';
import TextDinamic from "../components/TextDinamic";

const Inicio = () => {


  return (
    <div className="inicio d-flex container-fluid text-white">
      <div className="col-md-6 mt-5 d-flex">
        <div className="container mt-5 d-flex flex-column align-items-center mx-auto">
            <h5 className="mt-2">Contactame</h5>
            <ul className="d-flex w-25 justify-content-between redes mb-4">
              <li><a className="redes-a" rel="noreferrer noopener" target='_blank' href="https://linkedin.com/in/daniel-de-avila"><AiFillLinkedin/></a></li>
              <li><a className="redes-a" rel="noreferrer noopener" target='_blank' href="https://github.com/daniel2710"><AiFillGithub/></a></li>
              <li><a className="redes-a" rel="noreferrer noopener" target='_blank' href="mailto:daniel2710es@gmail.com?subject=Quiero+contactarte&body=Hola..."><SiGmail/></a></li>
              <li><a className="redes-a" rel="noreferrer noopener" target='_blank' href="https://twitter.com/deavilafront"><AiFillTwitterCircle/></a></li>
            </ul>
            <span className="location">Barranquilla | Colombia <ImLocation/></span>

          <div className="mb-4 title">
            <h2>Hola!, soy Daniel De Ávila</h2>
          </div>

          <div className="mb-4 text">
            <h2>Desarrollador Web Frontend Jr</h2>
          </div>

          <div className="mb-4 text div-text-estatic">
            <p className="texto-estatico">
              Construyo aplicaciones web del lado del cliente, utilizando
              tecnologías como:
            </p>
            <TextDinamic/>
          </div>

          <div>
            <a href={CV} download className="btn btn-dowload">Descargar Cv</a>
          </div>
        </div>
      </div>



      <div className="col-md-6">
        <div className="img mt-5 d-flex">
            <img className="mx-auto" width={350} src={Imagen} alt="imagen"/>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
