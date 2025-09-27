import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <main className='max-w-[1600px] mx-auto'>
        <Banner></Banner>
      </main>
    </>
  )
}

export default App
