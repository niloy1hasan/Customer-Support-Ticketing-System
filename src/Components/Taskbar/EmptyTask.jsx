import React from 'react';

const EmptyTask = () => {
    return (
        <div className='py-6 px-4 flex flex-col justify-center text-center items-center'>
            <h1 className='text-[18px] font-semibold'>No tasks in progress</h1>
            <p>Click on a ticket to start working</p>
        </div>
    );
};

export default EmptyTask;