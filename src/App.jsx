import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom' 
import Navbar from './components/Navbar'
import Register from './components/Register'
import AddQuestion from './components/AddQuestion'
const App = () => {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <><Navbar/><Register/></>
    },
    {
      path : '/add-question',
      element : <><AddQuestion/></>
    }
  ])
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}
export default App
