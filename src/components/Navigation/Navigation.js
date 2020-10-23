import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigation() {
    return (
        <nav style={{display:'flex', justifyContent:'flex-end'}}>
             <Link to='/'>
                <p className='f3 link dim black underline pa3 pointer'> Sign in</p>
            </Link>
             <Link to='/register'>
                <p className='f3 link dim black underline pa3 pointer'> Register</p>
            </Link>
            
        </nav>
    )
}
