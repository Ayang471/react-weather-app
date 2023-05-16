import React from "react";
import "../stylesheets/WeatherInfo.css";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";
import WeatherTemperature from "./WeatherTemperature";


function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className='row'>
             <div className='city-and-info'>
                    <div className='col'>

                        <h1>{props.data.city}</h1>
                        <ul className='city-info'>
                            <li><FormattedDate date={props.data.date} /></li>
                            <li className='text-capitalize'>{props.data.description}</li>
                        </ul>
                    </div>
             </div>
                <div className='row'>
                        <div className='col'>
                            <div className='temperature-icon'>
                            <WeatherIcons code={props.data.icon} alt={props.data.description} size={80}/>
                            <WeatherTemperature celsius={props.data.temperature} />
                            </div>
                        </div>
                    <div className='col'>
                        <ul>
                           {/* <li>Precipitation: <span>{Math.round(props.data.precipitation)}</span></li>*/}
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