import React from 'react';

const Education = () => {
    return (
        <div className='lg:ml-8' data-aos="zoom-in-down">
            <div className='mb-4'>
            <div>
            <h1 className='text-3xl text-green-500'>Green University of Bangladesh.</h1>
            <p className='text-xl'>Computer Science and Engineering (3rd year)</p>
            </div>
            <p className='flex justify-center text-white bg-blue-400 rounded-lg w-28'>2020-present</p>
        </div>


            <div className='mb-4'>
            <div>
            <h1 className='text-3xl text-blue-500'>Bogura Cantonment Public School and Collage</h1>
            <p className='text-xl'>Department of Science</p>
            </div>
            <p className='flex justify-center text-white bg-orange-400 rounded-lg w-28'>2016-2018</p>
        </div>


            <div className='mb-4'>
            <div>
            <h1 className='text-3xl text-purple-500'>Bogura Cantonment Board High School</h1>
            <p className='text-xl'>Passed Secondary School Certificate with Science</p>
            </div>
            <p className='flex justify-center bg-yellow-400 rounded-lg w-28'>2007-2016</p>
        </div>

        </div>
    );
};

export default Education;