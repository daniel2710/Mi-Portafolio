import React from 'react';
import {DiReact} from 'react-icons/di';
import {SiExpress} from 'react-icons/si';
import {DiMongodb} from 'react-icons/di';
import IconNode from '../assets/icons/icon-node.png'
import '../styles/textDinamic.scss';

const TextDinamic = () => {
  return (
    <div className='main'>
        <ul className="option m-0 p-0">
            <li><span>React Js <DiReact/></span></li>
            <li><span>Node Js <img src={IconNode} alt="icon node"/></span></li>
            <li className='express'><span>Express <SiExpress/></span></li>
            <li><span>Mongo Db <DiMongodb/></span></li>
        </ul>
    </div>
  )
}

export default TextDinamic