import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About';
import Cart from './components/Cart';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Shop from './components/Shop';
import Main from './layouts/Main';
import { productsAndCartData } from './loaders/getCart&ProductsData';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', 
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      loader: productsAndCartData,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'home',
          element: <Home></Home>
        },
        {
          path: 'shop',
          element: <Shop></Shop>
        },
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'about',
          element: <About></About>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
