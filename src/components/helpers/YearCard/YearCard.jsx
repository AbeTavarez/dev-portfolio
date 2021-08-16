import React from "react";
import './YearCard.css'


export default function YearCard ({title, time, description}) {
    return (
        <div className='year-card'>
            <h3>{title}</h3>
            <p>{time}</p>
            <p>{description}</p>
        </div>
    )
}