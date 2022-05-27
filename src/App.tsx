import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button } from "./components/Button";
import { Display } from "./components/Display";
import "./input.css";
import { Home } from "./Pages/Home";
import { Pause } from "./Pages/Pause";
import { Timer } from "./Pages/Timer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/pause" element={<Pause />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
