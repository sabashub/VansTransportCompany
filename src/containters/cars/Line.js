import React from 'react'
import './Slider.css'

const Line = (props) => {
  return (
    <div className="line">
        <div className='gradient__text' > 
                <h4>{props.headerText}</h4>  
            </div>
        <div className='horizontal_line'></div>
        
        
    </div>
  )
}

export default Line