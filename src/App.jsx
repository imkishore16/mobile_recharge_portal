import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Plans from "./components/Plans";
// import { Navbar } from "rsuite";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Home from "./components/Home";

function App() {
  return (
    <>
      {/* {sessionStorage.getItem("isLoggedIn") != null && ( */}
      
      {/* // )} */}
      <BrowserRouter>
      <div><Navbar /></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
