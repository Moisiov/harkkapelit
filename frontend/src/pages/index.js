import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom'

import Layout from '../components/layout/layout'
import Home from './home'
import Login from './login'
import Games from './games'
import Profile from './profile'
import NewAd from './newAd'

const Pages = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path='/' element={ <Home /> } />
                    <Route path='/games' element={ <Games /> } />
                    <Route path='/profile' element={ <Profile /> } />
                    <Route path='/login' element={ <Login /> } />
                    <Route path='/newad' element={ <NewAd /> } />
                </Routes>
            </Layout>
        </Router>
    )
}

export default Pages