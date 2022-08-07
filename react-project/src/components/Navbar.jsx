import React from 'react';
import logo from '../images/logo.svg'
import './Navbar.css'
import link from '../images/link.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='left'>
                <img className='logo' src={logo}/>
                <div className='navbar--title'>Meme Generator</div>
            </div>
            <div className='right'> <a className='git' href = 'https://github.com/dokeeer'><img src={link} className='link--img'/>Go To Git</a></div>


        </div>
    );
};

export default Navbar;