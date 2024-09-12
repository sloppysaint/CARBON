import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Enavbar from './Enavbar';
import EmissionForm from './EmissionForm';
import Footer from './Footer';
import NeutralityForm from './NeurtalityForm';
import NeutralityResult from './NeutralityResult';
import Navbar from './Navbar';

function Neutrality() {
  return (
    <div className="App font-link">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar/>
              <NeutralityForm />
              <Footer />
            </>
          } />
          <Route path="/neutrality" element={<Neutrality />} />
          <Route path="/neutralityresult" element={<NeutralityResult />} />
        </Routes>
      </div>
  );
}

export default Neutrality;
