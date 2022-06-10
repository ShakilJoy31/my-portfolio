import React from 'react';
import {HashLink as Link } from 'react-router-hash-link'; 

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link smooth to='#aboutme'>About me</Link></li>
                            <li><Link smooth to='#projects'>Projects</Link></li>
                            <li tabindex="0">
                                <Link smooth to='#myskills' class="justify-between">
                                Skills Section
                                </Link>
                            </li>
                            <li><Link smooth to='#contactme'>Contact me</Link></li>

                            <li><Link smooth to='#blogs'>Blogs</Link></li>
                        </ul>
                    </div>
                    <Link smooth to='#' class="btn btn-ghost normal-case text-2xl">Shakidul Islam Shakil</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                    <li><Link smooth to='#aboutme'>About me</Link></li>
                        <li><Link smooth to='#projects'>Projects</Link></li>
                        <li tabindex="0">
                            <Link smooth to='#myskills'>
                                Skills Section
                            </Link>
                        </li>
                        <li><Link smooth to='#contactme'>Contact me</Link></li>
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
                            <li><Link smooth to='#aboutme'>About me</Link></li>
                            </li>
                            <li><Link smooth to='#projects'>Projects</Link></li>
                            <li><Link smooth to='#myskills'>Skills Section</Link></li>
                            <li><Link smooth to='#contactme'>Contact me</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;