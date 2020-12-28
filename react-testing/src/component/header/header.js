import React from 'react';
import './header.css';
import Logo from './simple.logo.png';

const Header  = (props) => {
    return (
        <header data-test = 'header-component' >
        <div className= 'wrap'>
             <div className = 'logo' >
                     <img data-test = 'imgClass' src = {Logo} alt = 'logo' /> 
             </div>
        </div>
        </header>
    )
        
}

export default Header;