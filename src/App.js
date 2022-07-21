// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not
  const [mode1, setMode1] = useState('light'); //whether dark mode is enable or not

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msz: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }



  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');

      document.body.style.backgroundColor = '#1e4387';
      showAlert("dark mode has been enable", "sucsess");
      document.title = "TextConvert -dark mode";
      // setInterval(()=>{
      //   document.title='Textile is amazing mode ';
      //  },2000);
      //  setInterval(()=>{
      //    document.title='install textutiles now  ';
      //  },1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enable", "sucsess");
      document.title = "Textutils-light mode";


    }
  }

  const toggleMode2 = () => {
    if (mode1 === 'light') {
      setMode1('dark');
      document.body.style.backgroundColor = 'pink';
      showAlert("pink mode has been enable", "sucsess");
      document.title = "Textutils-pink mode";

    }
    else {
      setMode1('light');
      document.body.style.backgroundColor = 'orange';
      showAlert("orange mode has been enable", "sucsess");
      document.title = "Textutils-orange mode";


    }
  }


  return (
    <>
      <BrowserRouter>

        {/* <Navbar title="textutils" about="my about"/> */}
        <Navbar title="TextConvert" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2} />
        <Alert alert={alert} />
        {/* its for defualt props value */}
        {/* <Navbar/>  */}
        <div className="container my-3">
          <Routes>
            <Route path="about/*" element={<About mode={mode} />} />

            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text Here" mode={mode} />} />

          </Routes>

        </div>
      </BrowserRouter>

    </>

  );
}

export default App;
