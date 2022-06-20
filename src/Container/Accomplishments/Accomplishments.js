import React from 'react';

const Accomplishments = () => {
    return (
        <div className='mb-16 lg:mx-24'>
            <h1 className='flex justify-center mb-4 text-5xl text-purple-500'>Personal Accomplishments</h1>
            <div>
                <div className='grid'>
                    <div className='grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                        <div class="card bg-slate-600 shadow-purple-500 shadow-2xl" data-aos="flip-right">
                            <div class="card-body">
                                <h2 className="flex justify-center text-4xl text-purple-400 card-title">13+</h2>
                                <p className="flex justify-center text-xl text-purple-300">Projects</p>
                                <div class="card-actions justify-end">
                                </div>
                            </div>
                        </div>

                        
                        <div class="card bg-slate-600 shadow-purple-500 shadow-2xl" data-aos="flip-left">
                            <div class="card-body">
                                <h2 className="flex justify-center text-4xl text-purple-400 card-title">3+</h2>
                                <p className="text-xl text-purple-300 ">Years of Coding Experience</p>
                                <div class="card-actions justify-end">
                                </div>
                            </div>
                        </div>


                        <div class="card bg-slate-600 shadow-purple-500 shadow-2xl" data-aos="flip-right">
                            <div class="card-body">
                                <h2 className="flex justify-center text-4xl text-purple-400 card-title">15 +</h2>
                                <p className="flex justify-center text-xl text-purple-300">Github Followers</p>
                                <div class="card-actions justify-end">
                                </div>
                            </div>
                        </div>


                        <div class="card bg-slate-600 shadow-purple-500 shadow-2xl" data-aos="flip-left">
                            <div class="card-body">
                                <h2 className="flex justify-center text-4xl text-purple-400 card-title">10 +</h2>
                                <p className="flex justify-center text-xl text-purple-300">Certificate</p>
                                <div class="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accomplishments;