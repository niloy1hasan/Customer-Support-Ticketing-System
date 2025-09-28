import React, { useState } from "react";
import { toast } from "react-toastify";

const TicketCard = ({ ticket, handleProgressTask }) => {
  const [isProgress, setIsPogress] = useState(false);

  const addToProgress = () => {
   if(isProgress) return;
    toast('In Progress!');
    setIsPogress(true);
    handleProgressTask(ticket);
  }

  return (
    <div>
      <div onClick={()=> addToProgress()} className="card cursor-pointer h-full bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title flex-1">{ticket.title}</h2>
            <div className={`flex gap-2 items-center py-1.5 px-3.5 rounded-2xl ${isProgress? 'bg-[#F8F3B9]': 'bg-[#B9F8CF]'}`}>
              <div className={`h-3.5 w-3.5 rounded-full ${isProgress? 'bg-[#FEBB0C]': "bg-[#02A53B]"}`}></div>
              <p className={`font-medium ${isProgress? 'text-[#9C7700]' : 'text-[#0B5E06]'}`}>{isProgress? "In Progress" : ticket.status}</p>
            </div>
          </div>
          <p className="text-[#627382]">{ticket.description}</p>
          <div className="flex justify-between mt-3 items-center font-medium text-[10px] md:text-[12px] xl:text-[15px]">
            <div className="flex items-center gap-3">
              <h1 className="text-[#627382]">#{ticket.id}</h1>
              <h1 className={`${ticket.priority==='HIGH PRIORITY'? "text-[#F83044]": ticket.priority==='MEDIUM PRIORITY'? "text-[#FEBB0C]" : "text-[#02A53B]"} font-semibold`}>{ticket.priority}</h1>
            </div>
            <div className="flex items-center gap-3 text-[#627382]">
              <h1 className="">{ticket.customer}</h1>
              <div className="flex items-center gap-2">
                <i className="fa-regular fa-calendar text-[20px]"></i>
                <h1>{ticket.createdAt}</h1>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
