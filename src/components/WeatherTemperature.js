import React, { useState } from 'react'
import "../stylesheets/WeatherTemperature.css";

function WeatherTemperature(props) {
    const [unit, setUnit] = useState('celsius')

    const displayCelsius = (e) => {
        e.preventDefault();
        setUnit("celsius")
    }

    const displayFahrenheit = (e) => {
        e.preventDefault();
        setUnit("fahrenheit")
    }

    const fahrenheit = (e) => {
        return (props.celsius * 9) / 5 + 32;
    }

    if (unit === "celsius") {
        return (
            <div className='temp-conversion'>
                <span className='temp'>
                    {Math.round(props.celsius)} 
                    </span>
                <span className='unit'>{" "} C°
                    <span className='separator'>|</span> {" "}
                <a href="/" onClick={displayFahrenheit}>F°</a>
                </span>
            </div>

        )
    } else {
        return (
            <div className='temp-conversion'>
                <span className='temp'>
                    {Math.round(fahrenheit())}</span>
                <span className='unit'>
                    <a href="/" onClick={displayCelsius}>C°</a>
                    <span className='separator'>|</span> {" "}
                     F°
                </span>
            </div>

        )

    }


}

export default WeatherTemperature