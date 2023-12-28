import React from "react";
import MapContainer from "./Components/MapContainer";
import { Routes, Route } from "react-router-dom";
import Dishpage from "./Components/Dishpage";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Routes>
        {/* <MapContainer /> */}
        <Route path="/" element={<MapContainer />} />
        <Route path="/location/:id" element={<Dishpage />} />
      </Routes>
    </div>
  );
}

export default App;
