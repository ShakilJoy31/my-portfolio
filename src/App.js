import logo from './logo.svg';
import './App.css';
import Home from './Container/Home/Home';
import Navbar from './Container/Navbar/Navbar';
import AboutMe from './Container/AboutMe/AboutMe';
import ContuctMe from './Container/ContuctMe/ContuctMe';
import { Route, Routes } from 'react-router-dom';
import Projects from './Container/Projects/Projects';

function App() {
  return (
    <div className='lg:mx-48'>
      <Navbar></Navbar>
      <Home></Home>
      <AboutMe></AboutMe>
      <ContuctMe></ContuctMe>
      <Routes>
        <Route path='/projects' element={<Projects></Projects>}></Route>
      </Routes>
    </div>
  );
}

export default App;
