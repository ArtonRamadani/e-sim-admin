import { useState } from 'react'
import './App.scss'
// import Header from './components/header/header'
// import Footer from './components/footer/footer'
import Homepage from './pages/homepage/homepage'
import Layoutdrawer from './components/layout/layoutDrawer'
import { Route, Routes } from 'react-router-dom'
import Languages from './pages/languages/languages'
import Labels from './pages/labels/labels'

function App() {

  return (
    <>
      {/* <Header /> */}
      
      <Layoutdrawer>
      <Routes>
          <Route exact path="/" element={<Homepage  />} />
          <Route exact path="/languages" element={<Languages  />} />
          <Route exact path="/labels" element={<Labels  />} />
      </Routes>

      </Layoutdrawer>


      {/* <Homepage /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
