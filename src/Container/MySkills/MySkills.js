import React from 'react';
import { Outlet } from 'react-router-dom';
import {HashLink as Link } from 'react-router-hash-link'; 

const MySkills = () => {
    return (
        <div id='myskills' className='my-8 w-100' data-aos="zoom-in-up">
            <h1 className='flex justify-center mb-4 text-5xl text-purple-500'>Lets have a look at My Skills.</h1>
            <div class="">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <div class="drawer-side">
                            <label for="my-drawer-2" class="drawer-overlay"></label>
                            <div class="card w-100 shadow-2xl bg-emerald-100">
                                <div class="card-body">
                                    <ul class="menu p-4 overflow-y-auto w-80 text-base-content">
                                        <li><Link smooth to='/'>Education</Link></li>
                                        <li><Link smooth to='/works'>Work History</Link></li>

                                        <li><Link smooth to='/programmingskills'>Programming Skills</Link></li>

                                        <li><Link smooth to='/interests'>Interests</Link></li>

                                        <li><Link smooth to='/passion'>Passion</Link></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;