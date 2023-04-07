import React from 'react'
import Following from './pages/Following/Following';
import Myprofile from './pages/Myprofile/Myprofile';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      {/* <Myprofile /> */}
      {/* <Following/> */}
      <Router>
        <Routes>
          <Route exact path='/' element={<Myprofile />} />
          <Route path='/following' element={<Following />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
