import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import OurFood from "./Components/OurFood";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
// import SignIn from "./Components/SignIn";
import { useState } from "react";
// import LogIn from "./Components/LogIn";

function App() {

  const [count, setCount] = useState(0)
  
  const handleAdd = () => {
    setCount(count+1)
  }
  const handleMinus = () => {
    if(count>0)
    {setCount(count-1)}
  }

  return (
    <>
      <BrowserRouter>
        <Header count={count}/>
        <Routes>
          <Route path="/" element={<Home handleAdd={handleAdd} handleMinus={handleMinus}/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/ourfood" element={<OurFood/>} />
          {/* <Route path="/signin" element={<SignIn/>}/> */}
          {/* <Route path="/login" element={<LogIn/>}/> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
