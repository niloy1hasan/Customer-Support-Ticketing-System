import React from "react";
import TaskCard from "./TaskCard";
import EmptyTask from "./EmptyTask";

const TaskStatus = ({progressTask, handleResolvedTask, handleProgressTask, handleRemoveElement}) => {
  
  return (
    <div>
      <h1 className="font-semibold text-[22px] mb-4">Task Status</h1>
      <div className="card bg-base-100 w-full shadow-sm">
        <div className="card-body p-3.5">
          {progressTask.length === 0? <EmptyTask></EmptyTask> : progressTask.map(task => <TaskCard task={task} key={task.id} handleResolvedTask={handleResolvedTask} handleProgressTask={handleProgressTask} handleRemoveElement={handleRemoveElement}></TaskCard>)}
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
