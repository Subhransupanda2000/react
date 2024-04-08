import './App.css';
//import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';


function App() {
  return (
    <>
     <Navbar title='Text'/>
     <div className='container my-3'>
      {<TextForm heading="Enter the text to analyze"/>}
      {/*<About></About>*/}
     </div>
    </>
  );
}

export default App;
