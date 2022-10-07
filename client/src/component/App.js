import Homepage from './Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutApp from './AboutApp'; 
import NavBar from './NavBar'; 
import Signup from './Signup';
import Login from './Login';
import DiveSites from './DiveSites';
import DiveLogForm from './DiveLogForm';
import React, { useEffect, useState } from 'react';
import DiveSiteCountry from './DiveSiteCountry';
import IndividualDiveSite from './IndividualDiveSite';
import AuthProvider from './AuthProvider';
import EnvironmentalConservation from './EnvironmentalConservation';
import DiverProfile from './DiverProfile';
import HandSignals from './HandSignals';
import Weather from './Weather';

function App() {

  const [diveSites, setDiveSites] = useState([])
  const [user, setUser] = useState(null)
  const [diveLogs, setDiveLogs] = useState([])

  useEffect(() => {
    fetch("/api/dive_sites") 
      .then(data => data.json())
      .then(data => setDiveSites(data))
  }, []);

  useEffect(() => {
    fetch("/api/dive_logs") 
      .then(data => data.json())
      .then(data => setDiveLogs(data))
  }, []);


  useEffect(() => {
    fetch("/api/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogout(){
    setUser(null);
  }


  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavBar user={user} onLogout={handleLogout}/>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<AboutApp />} />
            <Route path='/signup' element={<Signup onLogin={setUser} />} /> 
            <Route path='/login' element={<Login />} />
            <Route path='/divesites' element={<DiveSites diveSites={diveSites} />} />
            <Route path='/divesites_country' element={<DiveSiteCountry diveSites={diveSites}/>} />
            <Route path='/divesites/:id' element={<IndividualDiveSite diveSites={diveSites}/>} />
            <Route path='/divelogform' element={<DiveLogForm diveLogs={diveLogs}/>} />
            <Route path='/diver/:id' element={<DiverProfile />} />
            <Route path="/environment" element={<EnvironmentalConservation />}/>
            <Route path="/weather" element={<Weather />}/> 
            <Route path="/hand_signals" element={<HandSignals />}/>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
