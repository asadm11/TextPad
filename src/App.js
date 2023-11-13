import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react'
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null, null)
    }, 1000);
  }

  const toggleMode = ()=>{
    if(mode === 'dark'){
      setmode('light');
      document.body.style.backgroundColor= 'white'
      showAlert('Light mode has been enabled!','success')
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor= '#00192f'
      showAlert('Dark mode has been enabled!','success')
    }
  };
  return (
    <Router>
      <Navbar title="TextPad12"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <Switch>
          {/* <Route exact path="/about">
          <About mode={mode}/>
          </Route> */}
          <Route exact path="/">
          <TextForm heading="Enter the text to ananlyze below" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
