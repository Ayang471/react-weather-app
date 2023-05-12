import React from "react";
import "../stylesheets/Weather.css";
import FormattedDate from "./FormattedDate";

function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className='row'>
                <h1>{props.data.city}</h1>
                <div className='col'>
                    <ul className='city-info'>
                        <li><FormattedDate date={props.data.date} /></li>
                        <li>{props.data.description}</li>
                    </ul>
                </div>
                <div className='row'>
                    <div className='col'>
                        {props.data.icon}
                        <img src='https://cdn-icons-png.flaticon.com/512/4052/4052984.png' alt='icon' width='60px' />
                        <strong> {Math.round(props.data.temperature)} </strong><span>C | F°</span>
                    </div>
                    <div className='col'>
                        <ul>
                            <li>Precipitation: <span>{Math.round(props.data.precipitation)}</span></li>
                            <li>Humidity:<span>{Math.round(props.data.humidity)} %</span></li>
                            <li>Wind: <span>{Math.round(props.data.wind)} km/h</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherInfo