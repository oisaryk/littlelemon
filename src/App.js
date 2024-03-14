import React from "react";
import Home from "./pages/Landing";
import Reservations from "./pages/Reservations";

import {Route, Routes} from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
      <>
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/about" element = {<About />}/>
          <Route path = "/reservations" element = {<Reservations />}/>
        </Routes>
      </>
  );
}

export default App;