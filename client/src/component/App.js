import Homepage from './Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutApp from './AboutApp'; 
import NavBar from './Navbar'; 
import Signup from './Signup';
import Login from './Login';
import DiveSites from './DiveSites';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((response) => {
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
      <Router>
        <NavBar user={user} onLogout={handleLogout}/>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<AboutApp />} />
          <Route path='/signup' element={<Signup onLogin={setUser} />} /> 
          {user ? (<h2> Welcome, {user.username}!</h2>) : <Route path='/login' element={<Login />} />}
          <Route path='/divesites' element={<DiveSites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
