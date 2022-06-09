import React from 'react';
import myImage from './IMG_20220202_185146.jpg';
import resume from '../Shakidul_Resume.pdf'; 
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'; 

const AboutMe = () => {
    const downloadResume = ()=>{
        toast.success('Resume downloaded successfully'); 
    }
    return (
        <div className='lg:mt-24 mx-12 mb-12'>
            <h1 className='text-5xl flex justify-center'>About Me</h1>
            <p className='mb-8 flex justify-center'>Why you choose me?</p>

            <div className=''>
                <div class="w-full rounded-lg bg-cyan-100 shadow-2xl flex">
                    <figure><img className='w-full hidden lg:block md:block h-full' src={myImage} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-3xl">
                            Simple Description about me
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p className='text-xl'>A Full Stack Web developer with back-end knowledge for the web application. I also have background knowledge of MERN stacks development. A lot of projects were build and developed over the last year. I like to be developed and to make the application developed.</p>
                        <div>
                            <p className='text-3xl'>Let's have a look at Highlights section</p>
                            <p className='text-xl'><i class="fa-solid fa-circle-check"></i> Full Stack Web Application development</p>

                            <p className='text-xl'><i class="fa-solid fa-circle-check"></i> Interactive Front-end Development as per the design</p>

                            <p className='text-xl'><i class="fa-solid fa-circle-check"></i> Back-end Development with full of security</p>

                            <p className='text-xl'><i class="fa-solid fa-circle-check"></i> Managing Database by MongoDB</p>

                            <p className='text-xl'><i class="fa-solid fa-circle-check"></i> Implementation of Authentication with High Accuracy</p>

                            <p className='text-xl'><i class="fa-solid fa-circle-check"></i> Responsible for the work or project be done</p>
                        </div>
                            <button class="btn btn-success btn-outline ">Hire me</button>
                            <a href={resume} download='Shakidul_Resume.pdf'><button onClick={downloadResume} class="btn btn-primary">Get Resume</button></a>
                            
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AboutMe;