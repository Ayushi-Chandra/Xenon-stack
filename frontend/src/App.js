import logo from './logo.svg';
import './App.css';
import { AppProvider } from "./AppContext";
import { useState } from "react";
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Route, Link, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';



import ContactUs from './components/ContactUs';



import List from './components/List';

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  return (
    <div>
      <AppProvider currentUser={currentUser}>

      

      <BrowserRouter>
      <Header/>
        <Routes>

          <Route path="/" element={
            <Navigate to="/login" />
          } />
          
            <Route path="login" element={<Login />} />
            
            <Route path="list" element={<List />} />


          


            <Route path="contactus" element={<ContactUs />} />
            <Route path="signup" element={<Signup />} />
            


          
        </Routes>



      </BrowserRouter>
      </AppProvider>

    </div>
  );
}

export default App;
