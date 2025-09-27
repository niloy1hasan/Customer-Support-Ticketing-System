import React from "react";
import TaskCard from "./TaskCard";

const TaskStatus = () => {
  return (
    <div>
      <h1 className="font-semibold text-[22px] mb-4">Task Status</h1>
      <div className="card bg-base-100 w-full shadow-sm">
        <div className="card-body p-3.5">
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
