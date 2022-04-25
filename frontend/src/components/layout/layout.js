import React from 'react'
import Header from './header'
import Nav from './nav'

const Layout = ({ children }) => {
    return(
        <React.Fragment>
            <Header />
            <div className='navWrapper'>
                <Nav />
                <main>{children}</main>
            </div>
        </React.Fragment>
    )
}

export default Layout