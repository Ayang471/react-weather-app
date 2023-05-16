import React, { useState } from 'react'
import "../stylesheets/WeatherForecast.css"
import axios from 'axios';
import WeatherForecastDays from './WeatherForecastDays';

function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecastData, setForecastData] = useState(null);

    function handleResponse(response) {
        setForecastData(response.data.daily);
        setLoaded(true);
    }


    if (loaded) {
         return (
            <div className='weather-forecast'>
                <div className='row'>
                    {forecastData.map((dailyForecast, index) => {
                        if (index < 6) {
                            return (
                                <div className='col' key={index}>
                                    <WeatherForecastDays data={dailyForecast} />
                                </div>
                            );
                        } return null
                    })}
                </div>
            </div>
        )
       
    } else{
        const apiKey = "9412b2adf899e4d1b182d55750bb4d03";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `  https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(handleResponse) 
      
       return null;
    }
    
}

export default WeatherForecast