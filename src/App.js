import logo from './logo.svg';
import './App.css';
import Home from './Container/Home/Home';
import Navbar from './Container/Navbar/Navbar';
import AboutMe from './Container/AboutMe/AboutMe';
import ContuctMe from './Container/ContuctMe/ContuctMe';
import Projects from './Container/Projects/Projects';
import Blogs from './Container/Blogs/Blogs';
import MySkills from './Container/MySkills/MySkills';
import Accomplishments from './Container/Accomplishments/Accomplishments';

function App() {
  return (
    <div>
      <div className='lg:mx-48'>
      <Navbar></Navbar>
      <Home></Home>
      <Projects></Projects>
      <MySkills></MySkills>
      <AboutMe></AboutMe>
      <Accomplishments></Accomplishments>
      <ContuctMe></ContuctMe>
    </div>
    <Blogs></Blogs>
    </div>
  );
}

export default App;
