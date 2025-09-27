import React from "react";
import { toast } from "react-toastify";

const TaskCard = ({task, handleProgressTask, handleResolvedTask, handleRemoveElement}) => {
  const addResolved = () => {
    handleResolvedTask(task);
    toast('Completed!');
    handleProgressTask(task, false);
    handleRemoveElement(task);
  }
  return (
    <div className="border flex flex-col gap-1.5 border-gray-700/10 rounded-lg p-2">
        <h2 className="font-semibold text-[18px]">{task.title}</h2>
        <button onClick={() => addResolved()} className="btn bg-[#02A53B] text-white">Complete</button>
    </div>
  );
};

export default TaskCard;
