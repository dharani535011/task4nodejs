
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Registeration from './pages/Registeration'

const router=createBrowserRouter([{
  path:"/",
  element:<Home/>,
  children:[
   
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"/registeration",
        element:<Registeration/>
      }
  ]
}])

function App() {
 

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
