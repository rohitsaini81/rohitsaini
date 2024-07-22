import React from 'react'
import { Link } from 'react-router-dom/'

export default function NavBar() {
  return (
    <nav>
      <ul className='Flex'>
        <div className="Flex" style={{width:"33.3vw",justifyContent:'right'}}>
          <li style={{margin:"0 0 0 20px"}}><a href="http://"  >Rohit Saini</a></li>
        </div>
        <div className="Flex" style={{width:"33.3vw",justifyContent:'center'}}>
          <li className='mlr-8px'><Link to={"/"}>Home</Link></li>
          <li className='mlr-8px'><Link to={"/about"}  >About</Link></li>
          <li className='mlr-8px'><Link to={"/contact"}  >Contact</Link></li>
        </div>

        <div className="Flex" style={{width:"33.3vw",justifyContent:'right'}}>
          <li style={{margin:"0 20px 0 0"}}><Link to={"/blogs"} >Blog</Link></li>
        </div>
      </ul>
    </nav>
  )
}
