import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Plans from "./components/Plan";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plan" element={<Plans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
