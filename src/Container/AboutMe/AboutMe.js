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
        <div className='mx-12 mb-12 lg:mt-24'>
            <h1 className='flex justify-center text-5xl'>About Me</h1>
            <p className='flex justify-center mb-8'>Why you choose me?</p>

            <div className=''>
                <div class="w-full rounded-lg bg-cyan-100 shadow-2xl flex">
                    <figure><img className='hidden w-full h-full lg:block md:block' src={myImage} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-3xl">
                            Simple Description about me
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
                        <label onClick={handleHireMe} for="my-modal-6" class="btn modal-button btn-success btn-outline">Hire me</label>

                        <a href={resume} download='Shakidul_Resume.pdf'><button onClick={downloadResume} class="btn btn-primary w-full">Get Resume</button></a>

                    </div>
                </div>
                {
                    hire && <div>
                        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">
                                <h3 class="font-bold text-3xl text-blue-500 flex justify-center">You are requested to fill the form below. </h3>
                                <p class="py-4 flex justify-center text-red-400">Type your Name, Email and the Message you want to send. </p>
                                <h1 className='flex justify-center text-2xl text-green-500'>Thank you</h1>
                                <div class="modal-action">
                                    <label for="my-modal-6" class="btn w-full text-white btn-warning text-2xl">Ok! Alright</label>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AboutMe;