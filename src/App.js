import React, { Fragment } from 'react'
import Navbar from './components/semantics/Navbar'
import Footer from './components/semantics/Footer'
import './stylesheets/main.css'

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Footer />
    </Fragment>
  )
}

export default App;