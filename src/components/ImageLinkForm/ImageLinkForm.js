import React from 'react'
import './ImageLinkForm.css'

export default function ImageLinkForm({onchange,onclick}) {
    return (
        <div>
            <p className='f3'>
                This App will detect faces in your pictures. Give it a try
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input placeholder='Enter image link to detect face' type='search' onChange={onchange} className='f4 pa2 w-70 center'/>
                    <button onClick={onclick} className='w-30 grow pointer f4 link ph3 pv2 dib white bg-light-red' type="submit">Detect</button>
                </div>
                
            </div>
        </div>
    )
}
