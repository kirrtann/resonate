
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./componets/Home"
import Blogpost from "./common/Blogpost"
import Navbar from "./componets/Navbar"


function App() {


  return (
    <>
    <div>
      <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path = "Blogpost" element={<Blogpost/>}/>
      </Routes></BrowserRouter>
    </div>
  
    </>
  )
}

export default App
