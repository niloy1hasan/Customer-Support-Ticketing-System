import React from "react";

const TaskCard = () => {
  return (
    <div className="border flex flex-col gap-1.5 border-gray-700/10 rounded-lg p-2">
        <h2 className="font-semibold text-[18px]">Card title!</h2>
        <button onClick={() => alert('Completed!')} className="btn bg-[#02A53B] text-white">Complete</button>
    </div>
  );
};

export default TaskCard;
