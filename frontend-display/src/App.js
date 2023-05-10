import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import Add from './Add.js';
import Update from './Update.js';

function App() {
  return (
    <div className="App">
        <h2>Simple Crud Operation </h2>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/update' element={<Update/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
