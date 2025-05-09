import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Pdf from "./pages/Pdf.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/upload' element={<Pdf />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App

