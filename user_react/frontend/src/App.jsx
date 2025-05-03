import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './assets/components/Layout'
import Error from './assets/components/Error'
import Home from './assets/components/Home'

import AddUser from './assets/components/Adduser'
import EditUser from './assets/components/Edituser'
import Signup from './assets/components/Signup'
import Login from './assets/components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './assets/components/User'

function App() {

  const routes = createBrowserRouter([
    {
      path: '/admin',
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: 'user', element: <User /> },
        { path: 'user/add', element: <AddUser /> },
        { path: 'user/edit/:id', element: <EditUser /> }

      ]

    },
    { path: '/signup', element: <Signup /> },
    { path: '/login', element: <Login /> },
    { path: '*', element: <Error /> }
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
