import logo from './logo.svg';
import './App.css';
import Home from './Container/Home/Home';
import Navbar from './Container/Navbar/Navbar';
import AboutMe from './Container/AboutMe/AboutMe';
import ContuctMe from './Container/ContuctMe/ContuctMe';
import { Route, Routes } from 'react-router-dom';
import Projects from './Container/Projects/Projects';
import Blogs from './Container/Blogs/Blogs';
import MySkills from './Container/MySkills/MySkills';
import Education from './Container/MySkills/Education';
import Work from './Container/MySkills/Work';
import ProgrammingSkill from './Container/MySkills/ProgrammingSkill';
import Interest from './Container/MySkills/Interest';
import Passion from './Container/MySkills/Passion';

function App() {
  return (
    <div className='lg:mx-48'>
      <Navbar></Navbar>
      <Home></Home>
      <AboutMe></AboutMe>
      
      <div className='w-full'>
      <Routes>
        <Route path='/myskills' element={<MySkills></MySkills>}>
          <Route index element={<Education></Education>}></Route>

          <Route path='works' element={<Work></Work>}></Route>

          <Route path='programmingskills' element={<ProgrammingSkill></ProgrammingSkill>}></Route>

          <Route path='interests' element={<Interest></Interest>}></Route>

          <Route path='passion' element={<Passion></Passion>}></Route> 
        </Route>
      </Routes>
      </div>

      
      <ContuctMe></ContuctMe>
      <Projects></Projects>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
