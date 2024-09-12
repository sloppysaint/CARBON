import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Neutrality from "./Neutrality";
import Footer from "./Footer";
import CombinedCode from "./CombinedCode";
import Navbar from "./Navbar"; // Import the new Navbar component

function Emission() {
  return (
    <div className="App font-link">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar className="sticky top-0 z-50" /> {/* Use the new Navbar component */}
            <CombinedCode />
            <Footer />
          </>
        } />
        <Route path="/neutrality" element={<Neutrality />} />
      </Routes>
    </div>
  );
}

export default Emission;