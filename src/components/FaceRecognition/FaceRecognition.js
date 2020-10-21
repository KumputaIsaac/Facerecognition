import React from 'react'
import './facerecognition.css'

export default function FaceRecognition({imageurl,box}) {
    console.log(box)
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' src={imageurl} width='500px' height='auto' alt="" />
                <div className='bounding-box'style={{top:50, right:50, bottom:50, left:50}}></div>
            </div>
            
        </div>
    )
}
