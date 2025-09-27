import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Ticket from './Components/Ticket/Ticket'

const loadTicketData = async() => {
  const res = await fetch('../public/customer-tickets.json');
  return res.json();
}

const ticketPromise = loadTicketData();

function App() {

  return (
    <>
      <Navbar></Navbar>
      <main className='max-w-[1600px] mx-auto'>
        <Banner></Banner>
        <section className='max-w-[1600px] w-[93%] mt-8 mx-auto flex flex-col lg:flex-row'>
          <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
            <Ticket ticketPromise={ticketPromise}></Ticket>
          </Suspense>
        </section>
      </main>
    </>
  )
}

export default App
