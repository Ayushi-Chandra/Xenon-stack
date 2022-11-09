import logo from './logo.svg';
import './App.css';

import Login from './components/Login';
import Logout from './components/Logout';
import ContactUs from './components/ContactUs';
import Header from "./components/Header";
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header />
       
        

        <Routes>
        <Route path="/" element={
            <Navigate to="/login" />
          } />
          <Route element={<Logout></Logout>} path="logout" />
          <Route element={<Login></Login>} path="login" />
          
          <Route element={<ContactUs />} path="contactus" />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;