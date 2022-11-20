import React from "react";
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import App from "../App";
function Routing() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route exact path="/" element={<App/>}/>
        </Routes>
    </Router>

    </div>
  );
}

export default Routing;
