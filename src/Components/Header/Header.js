import React, { useState } from 'react';
import { } from '@fortawesome/free-solid-svg-icons';

const Header =  ({resumeData}) => {

  return(
    <>
    <header id='home'>
      <nav id='nav-wrap'>
        <a className='mobile-btn' href='#nav-wrap' title="Show navigation">Show navigation</a>
        <a className='mobile-btn' href='#' title="Hide navigation">Hide navigation</a>
        <ul id='nav' className='nav'>
          <li className='current'><a className='smoothscroll' href='#home'>Home</a></li>
          <li className='current'><a className='smoothscroll' href='#about'>About</a></li>
          <li className='current'><a className='smoothscroll' href='#resume'>Resume</a></li>
          <li className='current'><a className='smoothscroll' href='#portfolio'>Portfolio</a></li>
        </ul>
      </nav>

      <div className='row banner'>
        <div className='banner-text'>
          <h1 className='responsive-headline'>I am {resumeData.name}.
          </h1>
          <h3>I am a {resumeData.role}.{resumeData.roleDescription}</h3>
          <hr/>
          <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                              
                            )})
                  }
               </ul>
        </div>
      </div>

      <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

    </header>
    </>

  );
};

export default Header;