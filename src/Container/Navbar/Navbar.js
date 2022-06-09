import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'; 

const Navbar = () => {
    const navigate = useNavigate();  
    const projects = () =>{
        toast.info('My Projects are being shown at the below of this website. Just check this out.'); 
        navigate('/projects')
    }

    const home = () =>{
        navigate('/')
    }
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>About me</a></li>
                            <li onClick={projects}><a>Projects</a></li>
                            <li tabindex="0">
                                <a class="justify-between">
                                Resume
                                </a>
                            </li>
                            <li><a>Contact me</a></li>
                        </ul>
                    </div>
                    <a onClick={home} class="btn btn-ghost normal-case text-2xl">Shakidul Islam Shakil</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><a>About me</a></li>
                        <li onClick={projects}><a>Projects</a></li>
                        <li tabindex="0">
                            <a>
                                Resume
                            </a>
                        </li>
                        <li><a>Contuct me</a></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src="https://i.ibb.co/g3ChxK2/IMG-7010-modified.png" />
                            </div>
                        </label>
                        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a class="justify-between">
                                    About me
                                </a>
                            </li>
                            <li onClick={projects}><a>Projects</a></li>
                            <li><a>Resume</a></li>
                            <li><a>Contact me</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;