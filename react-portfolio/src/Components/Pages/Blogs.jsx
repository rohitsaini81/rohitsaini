import React from 'react'
import { Profile2, background } from '../Images'
import MediaCard from './MediaCard'
import axios from 'axios'


export default function Blogs() {
  const imgsource = "https://random.imagecdn.app/500/150"
  const tempCaption = "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica";
  const api = "https://auto-result-system.onrender.com/"
  const setdata= async()=>{
    const data = await axios.get(api+"api/6").then((o)=>o.data)
    console.log(data)
  }
  React.useEffect(()=>{
    setdata();
  },[])
  // To be continued

  return (<>
    <div className='flex-center' style={{ width: "100vw", height: "100%", paddingTop: "100px" }}>
      <img style={{ position: 'fixed', width: '100vw', height: "100vh", marginTop: "98px", zIndex: '-11', objectFit: 'cover' }} src={background} />

      <MediaCard imgsrc={imgsource} title="Green Nature" name="Nature" caption={tempCaption} link1="" link2="" />
    </div>
    <strong style={{ color: 'red' }}>Blogs are not available right now due to server isues</strong>
  </>
  )
}
