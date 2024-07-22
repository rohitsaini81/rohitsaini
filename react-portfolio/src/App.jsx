import NavBar from './Components/NavBar';
import Home from './Components/Pages/Home'
import './css/my.css'
import './css/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from './Components/Pages/Error404';
import Footer from './Components/Pages/Footer';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Blogs from './Components/Pages/Blogs';
function App() {

  return (
    <><div className="Flex" style={{flexDirection:'column'}}>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path='/' element={<Home />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
     <Footer />
     </div>
    </>
  )
}

export default App
