import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigation2() {
    return (
        <nav style={{display:'flex', justifyContent:'flex-end'}}>
             <Link to='/'>
                <p className='f3 link dim black underline pa3 pointer'> Sign out</p>
            </Link>
            
        </nav>
    )
}
