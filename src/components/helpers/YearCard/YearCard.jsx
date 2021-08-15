import React from "react";


export default function YearCard ({title, time, description}) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{time}</p>
            <p>{description}</p>
        </div>
    )
}