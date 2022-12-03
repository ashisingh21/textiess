import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route, Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#04254a';
      showAlert("Dark mode Enabled", 'success')

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Enabled", 'success')

    }
  }

  return (

    <>
      <Navbar title="Texties" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">

        {/* <About mode={mode} /> */}
        <TextForm showAlert={showAlert} heading="Enter Your Text" mode={mode} />

      </div>
    </>
    // <><Router>
    //   <Navbar title="Texties" about="About" mode={mode} toggleMode={toggleMode} />
    //   <Alert alert={alert} />
    //   <div className="container my-3">
    //     <Routes>
    //       <Route path="/about" element={<About mode={mode} />} />
    //       <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text" mode={mode} />} />
    //     </Routes>
    //   </div>
    // </Router></>
  );
}
export default App;
