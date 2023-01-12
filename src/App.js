
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ColorScreen from './Pages/ColorScreen';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/colorScreen/:color' element={<ColorScreen/>} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
