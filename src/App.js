import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Career from "./components/pages/Career";
import Trip from "./components/pages/Trip";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/plan_your_trip" element={<Trip />}></Route>
      </Routes>
    </div>
  );
}

export default App;
