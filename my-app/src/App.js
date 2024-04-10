import './App.css';
//import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';

import React,{useState} from 'react';


function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{
setAlert(null);
},3000)
  }
  const togglemode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
      showAlert("dark mode enabled","sucess")
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("light mode eabled","sucess");
    }
  }
  return (
    <>
     <Navbar title='Text'mode={mode}togglemode={togglemode}/>
<Alert alert={alert}/>

     <div className='container my-3'>
      {<TextForm showAlert={showAlert} heading="Enter the text to analyze"/>}
      {/*<About></About>*/}
     </div>
    </>
  );
}

export default App;
