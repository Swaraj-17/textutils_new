import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
import Alert from "./components/Alert";
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";*/

function App() {
  const [mode, setMode] = useState('light'); //To tell whether we want dark mode or light mode for Navbar
  //Here mode is a variable with just a text. But we are using this text in Navbar.js to do things which need instuctions in text

  const [alert, setAlert] = useState(null);
  //alert is an object
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);      
    }, 3000);
  }
  
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been Enabled","success");
      document.title = 'TextUtils - Dark Mode'; //This is to change the name of chrome tab
      //setInterval(() => {  -->This is to keep on changing the tab name after certain time  
      //  document.title = 'TextUtils is Amazing';
      //}, 2000);
      //setInterval(() => {
      //  document.title = 'Install TextUtils Now';
      //}, 1500);
    }
    else{
      setMode('light'); 
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/*<Router>*/}
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3"> 
    {/*<Routes>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text to analyze below" mode={mode}/>}></Route>
    </Routes>*/}  
    <TextForm showAlert={showAlert} heading="Enter The Text to analyze below" mode={mode}/>
    </div>
    {/*</Router>*/}
    </>
  );
}
export default App;
