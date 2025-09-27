import React from "react";

const TicketCard = ({ ticket }) => {
  console.log(ticket);
  return (
    <div>
      <div className="card h-full bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title">{ticket.title}</h2>
            <div className="bg-[#B9F8CF] flex gap-2 items-center py-1.5 px-3.5 rounded-2xl">
              <div className="h-3.5 w-3.5 bg-[#02A53B] rounded-full"></div>
              <p className="text-[#0B5E06] font-medium">{ticket.status}</p>
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
