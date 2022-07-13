import React from 'react';
import ReactIcon from '../assets/icons/react.png';
import NodeIcon from '../assets/icons/nodejs.png';
import JavascriptIcon from '../assets/icons/js.png';
import BootstrapIcon from '../assets/icons/bootstrap.png';
import HtmlIcon from '../assets/icons/html-5.png';
import CssIcon from '../assets/icons/css-3.png';
import GitIcon from '../assets/icons/git.png';
import GitHubIcon from '../assets/icons/github.png';
import '../styles/carousel.scss';

const Carousel = () => {
  return (
    <div className='slider'>
        <div className='slide-track'>
            <div className='slide'>
                <img src={BootstrapIcon} alt='a' height='100' width='120'/>
            </div>

            <div className='slide'>
                <img src={HtmlIcon} alt='a' height='100' width='120'/>
            </div>

            <div className='slide'>
                <img src={ReactIcon} alt='a' height='100' width='120'/>
            </div>

            <div className='slide'>
                <img src={NodeIcon} alt='a' height='100' width='120'/>
            </div>

            <div className='slide'>
                <img src={JavascriptIcon} alt='a' height='100' width='120'/>
            </div>

            <div className='slide'>
                <img src={CssIcon} alt='a' height='100' width='120'/>
            </div>

            <div className='slide'>
                <img src={GitIcon} alt='a' height='100' width='120'/>
            </div>

            <div className='slide'>
                <img src={GitHubIcon} alt='a' height='100' width='120'/>
            </div>
        </div>
    </div>
  )
}

export default Carousel;