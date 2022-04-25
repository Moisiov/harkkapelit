import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom'

import Layout from '../components/layout/layout'
import Home from './home'
import Login from './login'

const Pages = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path='/' element={ <Home /> } />
                    <Route exact path='/login' element={ <Login /> } />
                </Routes>
            </Layout>
        </Router>
    )
}

export default Pages