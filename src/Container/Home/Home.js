import React from 'react';
import Typical from 'react-typical'
import resume from '../Shakidul_Resume.pdf';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'; 

const Home = () => {
    const downloadResume = ()=>{
        toast.success('Resume downloaded successfully'); 
    }
    return (
        <div>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/g3ChxK2/IMG-7010-modified.png" class="max-w-sm rounded-lg mx-12" />
                    <div>
                        <div>
                            <a target='_blank' href="https://www.facebook.com/shakil.ahammedjoy.39/"><i class="fa-brands fa-facebook text-4xl"></i></a>

                            <a target='_blank' href=""><i class="fa-solid fa-envelope text-4xl mx-4"></i></a>

                            <a target='_blank' href="https://www.linkedin.com/in/shakidul-islam-shakil-537696219/"><i class="fa-brands fa-linkedin text-4xl"></i></a>

                            <a target='_blank' href=""><i class="fa-brands fa-twitter text-4xl mx-4"></i></a>

                            <a target='_blank' href="https://www.instagram.com/shakil.ahammedjoy.39/?hl=en"><i class="fa-brands fa-instagram text-4xl"></i></a>

                        </div>
                        <h1 class="text-3xl font-bold">Hello, I'm <span className='text-4xl text-green-500'>Shakil.</span></h1>
                        <div>
                        <h1 className='text-3xl text-green-500'>
                            {" "}
                        <Typical
                            loop={Infinity}
                            steps={[
                                'Full Stack Web Developer', 
                                1500,
                                'Mern Stack Developer', 
                                1500,
                                'Front-end Developer', 
                                1500,
                                
                            ]}
                            
                        />
                        </h1>
                        </div>
                        <p class="py-6"></p>
                        <div className='flex'>
                            <button class="btn btn-success btn-outline mr-8">Hire me</button>
                            <a href={resume} download='Shakidul_Resume.pdf'><button onClick={downloadResume} class="btn btn-primary">Get Resume</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;


