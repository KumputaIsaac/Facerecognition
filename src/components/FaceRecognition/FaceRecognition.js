import React from 'react'
import './facerecognition.css'

export default function FaceRecognition({imageurl,box}) {
    console.log(box)
    return (
        <div className='center ma'>
            <div className='absolute ma2 '>
                <img id='inputimage' src={imageurl} width='500px' height='auto' alt="" />
                <div className='bounding-box'style={{top:box.toprow, right:box.rightcol, bottom:box.bottomrow, left:box.leftcol}}></div>
            </div>
            
        </div>
    )
}