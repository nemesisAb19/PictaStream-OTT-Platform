import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Homepage from './components/homepage/Homepage';
import Payment from './components/payment/Payment';
import Register from './components/register/Register';
import Login from './components/login/Login';
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from './components/homepage/Navbar';
import Movies from '../src/components/homepage/Movies';
import Apurva from '../src/components/homepage/Apurva';
import Elemental from '../src/components/homepage/Elemental';
import BossBaby from './components/homepage/BossBaby';
import TheIncredibles from '../src/components/homepage/TheIncredibles';
import ViewMoreMustWatchMovies from '../src/components/homepage/ViewMoreMustWatchMovies';
import Footer from './components/homepage/Footer';
import ChintuKaBirthday from './components/homepage/ChintuKaBirthday';

const App = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  // Define routes where Navbar should not appear
  //const excludedRoutes = ["/register", "/login", "/payment"];

  // Determine pages where the Navbar and Footer should not appear
  const hideNavbarAndFooter = ['/register', '/login', '/payment'];

  // Check if the current route is in the excluded list
  //const isExcludedRoute = excludedRoutes.includes(location.pathname);
  const currentPath = window.location.pathname;

  return (
    <div>
      {/* Conditionally render Navbar */}
      {/* {!isExcludedRoute && <Navbar />} */}

      {/* Conditionally render Navbar */}
      {!hideNavbarAndFooter.includes(currentPath) && <Navbar />}
      
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path='/apurva' element={<Apurva />} />
        <Route path='/elemental' element={<Elemental />} />
        <Route path='/boss-baby' element={<BossBaby />} />
        <Route path='/the-incredibles' element={<TheIncredibles />} />
        <Route path='/chintu-ka-birthday' element={<ChintuKaBirthday />} />
        <Route path='/view-more-must-watch' element={<ViewMoreMustWatchMovies />} />
        <Route path="/payment" element={user ? <Payment /> : <Navigate to="/login" />} />
        <Route path="/homepage" element={user ? <Homepage /> : <Navigate to="/login" />} />
        <Route path="/" element={user ? <Navigate to="/homepage" /> : <Navigate to="/register" />} />
      </Routes>
      
      {/* Conditionally render Footer */}
      {!hideNavbarAndFooter.includes(currentPath) && <Footer />}
    </div>
  );
};

export default App;
