import React, { use } from 'react';
import TicketCard from './TicketCard';

const Ticket = ({ticketPromise, handleProgressTask}) => {
    const tickets = use(ticketPromise);
    
    return (
        <div className=''>
            <h1 className='font-semibold text-[22px] mb-4'>Customer Tickets</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {tickets.map(ticket => <TicketCard ticket={ticket} key={ticket.id} handleProgressTask={handleProgressTask}></TicketCard>)}
            </div>
        </div>
    );
};

export default Ticket;