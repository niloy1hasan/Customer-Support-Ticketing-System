import React, { use } from 'react';
import TicketCard from './TicketCard';

const Ticket = ({ticketPromise}) => {
    const tickets = use(ticketPromise);
    
    return (
        <div className=''>
            <h1 className='font-semibold text-[22px]'>Customer Tickets</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {tickets.map(ticket => <TicketCard ticket={ticket} key={ticket.id}></TicketCard>)}
            </div>
        </div>
    );
};

export default Ticket;