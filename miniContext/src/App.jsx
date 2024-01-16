import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/userContextProvider'
import './App.css'

function App() {
  

  return (
    <UserContextProvider>
    <h1>raect with HC</h1>  
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
