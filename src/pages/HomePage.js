import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutICC from '../components/Cards/Cards';
import AboutCricket from '../components/Dashboard/Dashboard';
import Footer from '../components/Footer/Footer';
import Audienceform from '../components/Form/Form';
import Navbar from '../components/Navbar/Navbar';
import AboutPlayers from '../components/PieCharts/PieCharts';
import Sidebar from '../components/Sidebar/Sidebar';
import AboutWinners from '../components/Table/Table';


function HomePage() {
  return (
    <div>
      <Navbar />
      <Sidebar>
        <Routes>
           <Route path="/AboutCricket" element={<AboutCricket />} /> 
           <Route path="/AboutICC" element={<AboutICC/>} /> 
          <Route path="/AboutPlayers" element={<AboutPlayers/>} />
          <Route path="/AboutWinners" element={<AboutWinners />} />
          <Route path="/Audienceform" element={<Audienceform/>} />
        </Routes>
      </Sidebar>
      <Footer />
    </div>
  );
}
export default HomePage;
