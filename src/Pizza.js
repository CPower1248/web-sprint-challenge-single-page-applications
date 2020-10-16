import React from "react"

export default function(props) {
    const {details} = props

    return (
        <div className="pizza-container">
            <h2>{details.name}</h2>
            <p>{details.size}</p>
            {details.toppings.map(item => {
                return <p>{item}</p>
            })}
            <p>{details.special}</p>
        </div>
    )
}