import React from 'react'
import Navbar from './components/navbar'
import RemoveBackground from './components/RemoveBackground'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar />
      <div className='h-screen'>
        <RemoveBackground />
      </div>

      <Footer />
    </div>
  );
}

export default App