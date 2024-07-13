import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import { Layout } from './Layout'
import { LampContainer } from './Components/Lamp'
import { TextGenerateEffect } from './Components/TextGenerate'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "home",
        element: <Home />
      }
    ]
  }
])

const App = () => {
  const [toggle, setToggle] = useState(false)
  const [zoomOut, setZoomOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setZoomOut(true)
      setTimeout(() => {
        setToggle(true)
      }, 200) 
    }, 3400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {toggle ? (
        <RouterProvider router={router} />
      ) : (
        <LampContainer className={`absolute top-0 transition-transform duration-1000 ${zoomOut ? 'scale-0' : 'scale-100'}`}>
          <TextGenerateEffect words={'< H E L L O W O R L D / > FROM ALI'}  className={'text-white text-center justify-center'} />
          <span></span>
        </LampContainer>
      )}
    </>
  )
}

export default App
