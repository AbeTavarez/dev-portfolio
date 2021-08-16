import React from "react";
import './YearCard.css'


export default function YearCard ({title, time, description1, description2, description3}) {
    return (
        <div className='year-card'>
            <div className='time'>
                <img src="https://img.icons8.com/material-outlined/24/000000/clock--v1.png"/>
                <strong>{time}</strong>
            </div>
            
            <div className='time-line'>
                    <img src="https://img.icons8.com/ios/50/000000/vertical-line.png"/>
            </div>
            

           <div className='details'>
                <h3>{title}</h3>
                <p>{description1}</p>
                <p>{description2}</p>
                <p>{description3}</p>
           </div>

        </div>
    )
}