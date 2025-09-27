import React from 'react';

const ResolvedTaskCard = ({resolved, handleResolvedTask}) => {
    return (
        <div className='bg-green-100/50 border flex flex-col gap-1.5 border-green-200/50 rounded-lg p-3'>
        <h2 className="font-semibold text-[18px]">{resolved.title}</h2>
        <div className='flex w-full justify-between items-center'>
            <div className='text-green-600 flex items-center gap-1.5'>
                <i className="fa-solid fa-check"></i>
                <p className='font-medium'>Completed</p>
            </div>
            <button onClick={()=> handleResolvedTask(resolved, false)} className='text-gray-500 cursor-pointer'>Click to remove</button>
        </div>
    </div>
    );
};

export default ResolvedTaskCard;