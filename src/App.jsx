import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Ticket from './Components/Ticket/Ticket'
import Footer from './Components/Footer/Footer'
import TaskStatus from './Components/Taskbar/TaskStatus'
import ResolvedTask from './Components/ResolvedTask/ResolvedTask'
 import { ToastContainer } from 'react-toastify';

// const loadTicketData = async() => {
//   const res = await fetch('../public/customer-tickets.json');
//   return res.json();
// }
// const ticketPromise = loadTicketData();

function App() {
  // ticket state
  const [tickets, setTicket] = useState([]);

  useEffect(()=>{
    fetch('../public/customer-tickets.json')
    .then(res => res.json())
    .then(data => setTicket(data))
  }, [])

  const handleRemoveTicket = (removeItem) => {
    const newTickets = tickets.filter(ticket => removeItem.id!==ticket.id);
    setTicket(newTickets);
  }

  

  //progress state
  const [progressTask, setProgressTask] = useState([]);
  const handleProgressTask = (progress, isAdded=true) => {
    if(isAdded){
      setProgressTask([...progressTask, progress]);
    } else if(!isAdded) {
      const progressList = progressTask.filter(item => item.id!==progress.id);
      setProgressTask(progressList);
    }
  }

  //resolved state
  const [resolvedList, setResolvedList] = useState([]);
  const handleResolvedTask = (completed, isAdded=true) => {
    if(isAdded){
    setResolvedList([...resolvedList, completed]);
    } else if(!isAdded){
      const completedList = resolvedList.filter(item => item.id!==completed.id);
      setResolvedList(completedList);
    }
  }
  

  return (
    <>
      <Navbar></Navbar>
      <main className='max-w-[1600px] mx-auto bg-[#F5F5F5] pb-14'>
        <Banner progressTask={progressTask} resolvedList={resolvedList}></Banner>

        <section className='max-w-[1600px] w-[93%] mt-8 mx-auto flex flex-col gap-6 md:flex-row'>
          {/* ticket section */}
          <div className='flex-1'>
            { /*<Suspense fallback={<span className="max-w-[1600px] mx-auto my-5 mt-10 flex justify-center loading loading-infinity loading-xl"></span>}>
              <Ticket ticketPromise={ticketPromise} handleProgressTask={handleProgressTask} removeElement={removeElement}></Ticket>
            </Suspense> */}
            <Ticket tickets={tickets} handleProgressTask={handleProgressTask}></Ticket>
          </div>

          {/* side bar section for task status and resolved task */}
          <div className='w-full md:w-[280px] lg:w-[350px]'>
            <TaskStatus progressTask={progressTask} handleResolvedTask={handleResolvedTask} handleProgressTask={handleProgressTask} handleRemoveTicket={handleRemoveTicket}></TaskStatus>
            <ResolvedTask resolvedList={resolvedList} handleResolvedTask={handleResolvedTask}></ResolvedTask>
          </div>
        </section>
      </main>
      {/* footer section */}
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
