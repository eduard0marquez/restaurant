import "bootstrap/dist/css/bootstrap.min.css";
import { Contacto, Menu, Home, NotFoundPage, Nosotros } from './pages';
import { Routes, Route } from "react-router-dom";
import { Footer, NavBar } from "./components";

function App() {
  

  return (
    <>
     <NavBar/>
      <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/nosotros" element={<Nosotros/>} />
           <Route path="/menu" element={<Menu />} />
           <Route path="/contacto" element={ <Contacto/>} />
           <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        <Footer/>
      
    </>
  )
}

export default App
