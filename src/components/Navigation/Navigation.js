import React from 'react'
// import {Link} from 'react-router-dom'

export default function Navigation({onRouteChange,isSignedin}) {
    if(isSignedin){
        return (
        <nav style={{display:'flex', justifyContent:'flex-end'}}>
                <p onClick={()=>{onRouteChange('signout')}} className='f3 link dim black underline pa3 pointer'> Sign Out</p>
                {/* <p className='f3 link dim black underline pa3 pointer'> Register</p> */}
        </nav>
    )
    }else{
        return (<nav style={{display:'flex', justifyContent:'flex-end'}}>
                <p onClick={()=>{onRouteChange('signin')}} className='f3 link dim black underline pa3 pointer'> Sign In</p>
                <p onClick={()=>{onRouteChange('register')}} className='f3 link dim black underline pa3 pointer'> Register</p>
        </nav>)
    }
    
}
