import React from "react";
import './YearCard.css'


export default function YearCard ({title, time, description}) {
    return (
        <div className='year-card'>
            <div className='time'>
                <img src="https://img.icons8.com/material-outlined/24/000000/clock--v1.png"/>
                <p>{time}</p>
            </div>
           <div className='details'>
                <h3>{title}</h3>
                <p>{description}</p>
           </div>
        </div>
    )
}