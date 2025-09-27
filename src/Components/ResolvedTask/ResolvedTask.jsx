import React from "react";
import ResolvedTaskCard from "./ResolvedTaskCard";
import EmptyResolvedTask from "./EmptyResolvedTask";

const ResolvedTask = ({resolvedList, handleResolvedTask}) => {
  return (
    <div className="mt-6">
      <h1 className="font-semibold text-[22px] mb-4">Resolved Task</h1>
      <div className="card bg-base-100 w-full shadow-sm">
        <div className="card-body p-3.5">
          {resolvedList.length === 0 ? <EmptyResolvedTask></EmptyResolvedTask> : resolvedList.map(resolved => <ResolvedTaskCard resolved={resolved} handleResolvedTask={handleResolvedTask}></ResolvedTaskCard>)} 
          
        </div>
      </div>
    </div>
  );
};

export default ResolvedTask;
