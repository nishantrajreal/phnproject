import './Otherfile/Checks.css'
import Screen1 from './Components/Screen1/Screen1';
import Screeen2 from './Components/Screen2/Screeen2';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Screen1 />}></Route>
        <Route path = "/Screen2" element = {<Screeen2 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
