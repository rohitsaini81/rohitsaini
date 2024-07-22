import React from 'react'
import BackgroundImage, { Profile, Avatar } from '../Images'
import Type from './Type';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
export default function Home() {

  return (
    <section style={{ width: '100vw' }}>
      <div style={{ position: 'relative', top: '0', left: '0' }}>
        <img style={{ position: 'fixed', zIndex: '-1', top: '0', left: '0' }} src={BackgroundImage} /></div>




      <div className="Flex">
        <div className="firstSection flex-center" style={{ flexDirection: 'column' }}>
          <div className='w-10'><h1>Hii There ! <span className='wave'>👋🏻</span></h1></div>

          <div className='w-10'><h1>This is <span style={{ color: '#DDA0DD' }}>Rohit Saini</span></h1></div>
          <div className='w-10'><h1><span style={{ color: '#DDA0DD' }}><Type /> </span></h1></div>
        </div>
        <div className="secondSection">
          <img src={Profile} /></div>
      </div>

      <HomeSection2 />
      <div className="flex-center" style={{ flexDirection: "column" }}>
        <h1>FIND ME ON</h1>
        <p className="p">Feel free to connect with me</p>
        <div className="flex-center">
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/rohitsaini81"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/rohitsaini81"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/rohitsaini81/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/scientist.tech"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>

    </section>
  )
}


function HomeSection2() {
  return (
    <div>
      <div className="Flex flex-center">
        <div className="firstSection flex-center" style={{ flexDirection: 'column' }}>
          <div style={{ width: '60vw' }}><h1>LET ME INTRODUCE MYSELF</h1></div>

          <div style={{ width: '60vw' }}><h3 className='p'>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</h3></div>
          <div style={{ width: '60vw' }}><h3 className='p'>I am fluent in classics like Java 20, Javascript and Python. </h3></div>
          <div style={{ width: '60vw' }}><h3 className='p'>My field of Interest's are building new  Web Technologies and Products and also in areas related to Game Development.
          </h3></div>
          <div style={{ width: '60vw' }}><h3 className='p'>Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js</h3></div>
        </div>


        <div className="secondSection flex-center" style={{ height: "50vh", width: '32vw' }}>
          <img style={{ height: "100%", width: '100%' }} src={Avatar} /></div>
      </div>
    </div>
  )
}

