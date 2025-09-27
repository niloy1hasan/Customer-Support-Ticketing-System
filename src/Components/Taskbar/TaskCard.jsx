import React from "react";

const TaskCard = ({task, handleProgressTask, handleResolvedTask}) => {
  const addResolved = () => {
    handleResolvedTask(task);
    alert('Completed!');
    handleProgressTask(task, false);
  }
  return (
    <div className="border flex flex-col gap-1.5 border-gray-700/10 rounded-lg p-2">
        <h2 className="font-semibold text-[18px]">{task.title}</h2>
        <button onClick={() => addResolved()} className="btn bg-[#02A53B] text-white">Complete</button>
    </div>
  );
};

export default TaskCard;
