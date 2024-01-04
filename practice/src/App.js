/*import React from 'react'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App*/


// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dishpage from "./Components/Map/Dishpage"; // Assuming a LocationDetails component

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/location/:id" element={<Dishpage />} />
          {/* Other routes go here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
