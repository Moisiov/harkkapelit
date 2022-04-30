import React from 'react'
import { UserProvider } from './contexts/userContext'
import Pages from './pages'
import './styles/styles.scss'

function App() {

  return (
    <div className='app'>
      <UserProvider>
        <Pages />
      </UserProvider>
    </div>
  )
}

export default App