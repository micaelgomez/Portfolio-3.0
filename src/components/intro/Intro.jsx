import React from 'react'
import './intro.scss'
import {init} from "ityped";
import { useEffect, useRef } from 'react';


export default function Intro() {

  const textRef = useRef();

  useEffect( () => {
    console.log(textRef)
    init(textRef.current, { 
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ['Web Developer', 'Yeah!'], 
      });
    },[])



  return (
    <div className='intro' id='intro'>
        <div className="left">
            <div className="imgContainer">
                <img src='assets/foto.png' alt='Foto sobre mi '/>
            </div>
        </div>
        <div className="right">
              <div className="wrapper">
                  <h2>Hi there,I'm</h2>
                  <h1>Micael Alessandro Gomez</h1>
                  <h3>Full stack <span ref={textRef}></span> </h3>
              </div>
              <a href='#portfolio'>
                  <img src='assets/icons8-double-down-100.png' alt=''></img>
              </a>
        </div>

    </div>
  )
}
