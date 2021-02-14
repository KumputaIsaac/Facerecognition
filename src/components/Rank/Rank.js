import React from 'react'

export default function Rank({name, entries}) {
    return (
        <div style={{marginTop:'-40px'}}>
            <div  className='white f3'>
                <p>{`${name} , your current rank is...`}</p>
                
            </div>
            <div className='white f1' style={{marginTop:'-30px'}}>
                <p>#{entries}</p>
            </div>
        </div>
        
    )
}
