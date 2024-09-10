import { useState } from 'react'
import { UserProvider } from './Components/Context/Context'
import UserProfile from './Components/Userprofile'
import './App.css'

function App() {


 

  return (
    <UserProvider>
    <div className="app-container">
        <h1>Simple User Profile</h1>
        <UserProfile />

        </div>
    
    </UserProvider>
  )
}

export default App
