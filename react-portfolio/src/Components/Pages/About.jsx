import React from 'react'
import {Profile2, background } from '../Images'
import Techstack from './Techstack'

export default function About() {
    return (
      <div>
        <img style={{position:'fixed',width:'100vw',zIndex:'-11',objectFit:'cover'}} src={background} />
        <div className="Flex flex-center">
          <div className="firstSection flex-center" style={{ flexDirection: 'column' }}>
            <div className='flex-center' style={{ width: '60vw' }}><h2 style={{color:'wheat'}}>Know Who <span className='red'>I'M</span></h2></div>
  
            <div style={{ width: '60vw' }}><h5 className='p'>Hi Everyone, I am Rohit Saini from Haryana, India.</h5></div>
            <div style={{ width: '60vw' }}><h5 className='p'>I'm enthusiastic and motivated <spand className="red">Softwere Developer</spand> with a passion for building
innovative desktop and web applications</h5></div>
            {/* <div style={{ width: '60vw' }}><h5 className='p'>Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js</h5></div> */}
          </div>
  
  
          <div className="secondSection flex-center" style={{ height: "50vh", width: '32vw' }}>
            <img style={{ height: "100%", width: '100%' }} src={Profile2} /></div>
        </div>
        <Techstack />
      </div>
    )
  }
  
  