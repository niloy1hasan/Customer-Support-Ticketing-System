import React from 'react';
import vector1 from '../../assets/vector1.png'
import reverseVector from '../../assets/rotate_vector1.png'

const Banner = ({progressTask, resolvedList}) => {
    return (
        <div className='w-[93%] mx-auto flex flex-col md:flex-row gap-4 mt-12 text-white'>
            <div className='flex flex-col relative justify-center items-center py-10 bg-gradient-to-l from-[#632EE3] to-[#9F62F2] flex-1 h-[250px] rounded-lg'>
                <img src={vector1} alt="" className=' absolute left-0'/>
                <img src={reverseVector} alt="" className=' absolute right-0'/>
                <h2 className='text-[18px] font-extralight'>In-Progress</h2>
                <h1 className='text-6xl font-semibold my-4'>{progressTask.length}</h1>
            </div>
            <div className='flex flex-col relative justify-center items-center py-10 bg-gradient-to-l from-[#54CF68] to-[#00827A] flex-1 h-[250px] rounded-lg'>
                <img src={vector1} alt="" className=' absolute left-0'/>
                <img src={reverseVector} alt="" className=' absolute right-0'/>
                <h2 className='text-[18px] font-extralight'>Resolved</h2>
                <h1 className='text-6xl font-semibold my-4'>{resolvedList.length}</h1>
            </div>
        </div>
    );
};

export default Banner;