
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      document.body.style.color = 'white';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  return (
    <Router>
      <> 
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className='container my-3'> 
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}
// users --> Component  without using exact1
// /users/home - -› with using exact Component 2

export default App;

