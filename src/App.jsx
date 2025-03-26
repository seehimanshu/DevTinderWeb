import { useState } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Body from './Body'
import Login from './Login'
import Profile from './Profile'
import appStore from './utils/appStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path="/" element={<Body/>}>
              <Route path="/login" element={<Login/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      
    </>
  )
}

export default App
