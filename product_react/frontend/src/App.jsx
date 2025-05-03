import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Error from './components/Error'
import Home from './components/Home'
import Products from './components/Products'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'
import Signup from './components/Signup'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const routes = createBrowserRouter([
    {
      path: '/admin',
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: 'products', element: <Products /> },
        { path: 'products/add', element: <AddProduct /> },
        { path: 'products/edit/:id', element: <EditProduct /> }

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
