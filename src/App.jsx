import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className='outlet'>
        <Outlet />
      </div>
    </>
  )
}

export default App
