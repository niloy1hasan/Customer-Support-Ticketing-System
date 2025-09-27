import React from 'react';

const EmptyResolvedTask = () => {
    return (
        <div className='py-6 px-4 flex flex-col justify-center text-center items-center'>
            <h1 className='text-[18px] font-semibold'>No Resolved Task</h1>
            <p>Complete a task to add in Resolved section</p>
        </div>
    );
};

export default EmptyResolvedTask;