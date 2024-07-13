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
  const [fadein, setfadein] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setfadein(true)
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
        <LampContainer className={`absolute top-0 transition-all duration-300 ease-in-out ${fadein ? 'opacity-0' : 'opacity-100'}`}>
          <TextGenerateEffect words={'< H E L L O W O R L D / > FROM ALI'}  className={'text-white text-center justify-center'} />
        </LampContainer>
      )}
    </>
  )
}

export default App
