import React from 'react'
import Tilt from 'react-tilt'
import adeola from './adeola.png'
import './logo.css'
 


export default function Logo() {
    return (
        <div style={{marginTop:'-50px'}}>
            <Tilt className="Tilt br2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                 <div className="Tilt-inner pa3">
                     <img src={adeola} alt="food"/>
                 </div>
            </Tilt>
        </div>
    )
}
