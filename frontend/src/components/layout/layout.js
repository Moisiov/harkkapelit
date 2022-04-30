import React from 'react'
import Header from './header'
import Nav from './nav'

const Layout = ({ children }) => {
    return(
        <React.Fragment>
            <Header />
            <div className='layoutWrapper'>
                <Nav />
                <div className='layoutContent'>{children}</div>
            </div>
        </React.Fragment>
    )
}

export default Layout