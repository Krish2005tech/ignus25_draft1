import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import wave from './assets/wave_no_bg.png'

// setup router
import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    // Simulate a loading period
    const timer = setTimeout(() => setLoading(false), 3000); // Adjust the time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="wave-transition">
         <img src={wave} className="wave" alt="wave" />
          <div className="main-page">
           <Header/>
            <Outlet/>
            <Footer/>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default App;