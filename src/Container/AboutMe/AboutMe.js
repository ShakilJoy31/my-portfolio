import React from 'react';
import myImage from './IMG_20220202_185146.jpg';
import resume from '../Shakidul_Resume.pdf';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const AboutMe = () => {
    const [hire, setHire] = useState(null);
    const downloadResume = () => {
        toast.success('Resume downloaded successfully');
    }

    const handleHireMe = () => {
        setHire(100);
    }
    return (
        <div className='mb-12 lg:mx-24 lg:mt-8' id='aboutme'>
            <h1 className='text-5xl text-purple-500'>About Me</h1>
            <p className='mb-2'>Why you choose me?</p>
            <p className='mb-8 text-xl text-purple-300'>A passionate web developer who loves to learn continuously and implement it. <br></br> I also love to build amazing web applications.</p>
            <div className='grid'>
                <div className='grid gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                    <div className='p-2 border rounded-lg' data-aos="zoom-out-down">
                        <h1 className='text-3xl text-red-300'>2019</h1>
                        <p className='text-xl text-red-200'>Become Interested and start to learn front-ent basics. Trying to apply the basic HTML and CSS on the application</p>
                    </div>
                    <div className='p-2 border rounded-lg' data-aos="zoom-out-up">
                        <h1 className='text-3xl text-red-300'>2020</h1>
                        <p className='text-xl text-red-200'>Started to learn coding on C, Java and Python and finally Javascript attracts me the most.</p>
                    </div>
                    <div className='p-2 border rounded-lg' data-aos="zoom-out-down">
                        <h1 className='text-3xl text-red-300'>2021</h1>
                        <p className='text-xl text-red-200'>Started to learned Javascript and ES6 and React to build some small projects which are only front-end based.</p>
                    </div>
                    <div className='p-2 border rounded-lg' data-aos="zoom-out-up">
                        <h1 className='text-3xl text-red-300'>2022</h1>
                        <p className='text-xl text-red-200'>Started a new journey with Programming hero web development course. Implemented some full stack and projects.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;