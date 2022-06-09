import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {send} from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'; 

const ContuctMe = () => {
    const [modal, setModal] =useState(null); 

    const handleOnSubmit = (event) =>{
        event.preventDefault(); 
        const name = event.target.name.value; 
        const email = event.target.email.value; 
        const message = event.target.message.value; 
        send(
            'service_hj0fwla', 
            'template_cz24k49', 
            {name, email, message}, 
            'K8liY1EZYZd7gRDVk'
        )
        .then(res => {
            toast.success('I have received your message. Let me check this out.')
            setModal(res.status); 
            console.log('success', res.status, res.text, modal); 
        })
        .catch(error => {
            console.log('fail', error); 
        })
    }
    return (
        <div className='mb-12'>
            <div>
                <h1 className='flex justify-center text-5xl'>Contact With Me</h1>
                <p className='flex justify-center mb-8'>Let's keep in touch</p>
            </div>


            <div style={{
                backgroundImage: `url("https://martech.org/wp-content/uploads/2015/09/email-laptop-computer-marketing-ss-1920.jpg")`
            }} class="hero rounded-lg bg-red-100">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <form onSubmit={handleOnSubmit}>
                    <div class="card w-96 block mx-auto shadow-2xl bg-emerald-200">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your message</span>
                                </label>
                                <input type="text" name='message' placeholder="Type Your Message here" class="input input-bordered input-lg w-full max-w-xs" />
                            </div>

                            <div class="form-control mt-6">
                            <label type='submit' for="my-modal-6" class="btn modal-button btn-info text-2xl">Send <i class="fa-solid fa-paper-plane text-2xl ml-2 text-purple-600"></i></label>
                                
                            </div>
                        </div>
                    </div>
                    </form>

                    <div>
                        <h1 class="text-5xl font-bold text-fuchsia-600">Get In Touch With Me <i class="fa-solid fa-envelope"></i></h1>
                        <p class="py-6 text-white text-2xl">Send your email here.</p>
                    </div>
                </div>
            </div>
            {
                modal && <div className='bg-red-200'>
                    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                  <div class="modal-box bg-orange-100">
                    <h3 class="font-bold text-green-400 flex justify-center text-3xl">Thanks a lot for texting me.</h3>
                    <p class="py-4 text-purple-400 flex justify-center text-xl">Let me get back to you as early as possible.</p>
                    <div class="modal-action flex justify-center">
                      <label for="my-modal-6" class="btn btn-outline btn-info">You are welcome</label>
                    </div>
                  </div>
                </div>
                </div>
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ContuctMe;