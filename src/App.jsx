import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <div className='h-screen m-10'>
      app
      <Navigation/>
      <MainRoutes/>
    </div>
  )
}

export default App
