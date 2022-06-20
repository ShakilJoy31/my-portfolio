import React, { useState } from 'react';
import Typical from 'react-typical'
import resume from '../Shakidul_Resume.pdf';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [hire, setHire] = useState(null);
    const downloadResume = () => {
        toast.success('Resume downloaded successfully');
    }
    const handleHireMe = () => {
        setHire(100);
    }
    return (
        <div className='w-100'>
            <div class="w-100" id='top'>
                <div class="flex-col lg:flex-row-reverse flex justify-center items-center lg:mx-24">
                    <div>
                        <img src="https://i.ibb.co/MB4SjKQ/IMG-6967-3.jpg" class="max-w-sm rounded-lg" data-aos="zoom-in-left" />
                    </div>

                    <div className='' data-aos="zoom-in-right">
                        <h1 class="text-3xl font-bold">Hello, I'm <span className='text-4xl text-orange-500'>Shakidul Islam Shakil.</span></h1>
                        <div className='w-50'>
                            <p className='text-xl'>I'm a full-stack web developer with a passion for developing scalable web applications. A lot of projects
                                both front-end and back-end were made as well as developed using ReactJs, NodeJs and MongoDB
                                successfully. Strongly would like to be responsible for developing and for making users satisfied.
                            </p>
                        </div>
                        <p class="py-6"></p>
                        <div className='flex'>
                            <label onClick={handleHireMe} for="my-modal-6" class="btn modal-button btn-success btn-outline mr-6">Hire me</label>
                            <a href={resume} download='Shakidul_Resume.pdf'><button onClick={downloadResume} class="btn btn-primary">Get Resume</button></a>
                        </div>
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

export default Home;


