import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Ticket from './Components/Ticket/Ticket'
import Footer from './Components/Footer/Footer'
import TaskStatus from './Components/Taskbar/TaskStatus'

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
        <section className='max-w-[1600px] w-[93%] mt-8 mx-auto flex flex-col gap-6 md:flex-row'>
          <div className='flex-1'>
            <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
            <Ticket ticketPromise={ticketPromise}></Ticket>
          </Suspense>
          </div>
          <div className='w-full md:w-[280px] lg:w-[350px]'>
            <TaskStatus></TaskStatus>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
