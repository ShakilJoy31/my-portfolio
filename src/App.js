import logo from './logo.svg';
import './App.css';
import Home from './Container/Home/Home';
import Navbar from './Container/Navbar/Navbar';
import AboutMe from './Container/AboutMe/AboutMe';
import ContuctMe from './Container/ContuctMe/ContuctMe';
import { Route, Routes } from 'react-router-dom';
import Projects from './Container/Projects/Projects';
import Blogs from './Container/Blogs/Blogs';

function App() {
  return (
    <div className='lg:mx-48'>
      <Navbar></Navbar>
      <Home></Home>
      <AboutMe></AboutMe>
      <ContuctMe></ContuctMe>
      <Projects></Projects>
      <Blogs></Blogs>
      {/* <Routes>
        <Route path='/' element={}></Route>

        <Route path='/aboutme' element={}></Route>

        <Route path='/contactme' element={}></Route>

        <Route path='/projects' element={}></Route>

        <Route path='/blogs' element={}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
