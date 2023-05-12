import React, { useState } from "react";
import axios from "axios";
import "../stylesheets/Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
//import WeatherForecast from "./WeatherForecast";


function Weather(props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({})
    const [City, setCity] = useState(props.defaultCity);


    const handleSubmit = (e) => {
        
    }

    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

    const handleResponse = (response) => {
        console.log(response.data);
        setWeatherData({
            city: response.data.name,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: response.data.weather[0].icon,
            maxTemp: response.data.main.temp_max,
            minTemp: response.data.main.temp_min,
        })
        setReady(true);
    }


    if (ready) {
        return (
            <div className="Weather">
                <div className='container'>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <input
                                    type="search"
                                    placeholder="Enter a city..."
                                    className="search"
                                    onChange={handleCityChange}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="submit"
                                    value="Search"
                                    className="btn"
                                />
                            </div>
                        </div>
                        
                    </form>
                    <WeatherInfo data={weatherData}/>
                    <div className='weather-forecast'>
                        <div className='row'>
                            <div className='col'>
                                <img src='https://cdn-icons-png.flaticon.com/512/4052/4052984.png' alt='icon' width='60px' />
                                <p>{Math.round(weatherData.maxTemp)}° | {Math.round(weatherData.minTemp)}°</p>
                            </div>
                            <div className='col'>
                                <img src='https://cdn-icons-png.flaticon.com/512/4052/4052984.png' alt='icon' width='60px' />
                                <p>{Math.round(weatherData.maxTemp)}° | {Math.round(weatherData.minTemp)}°</p>
                            </div>
                            <div className='col'>
                                <img src='https://cdn-icons-png.flaticon.com/512/4052/4052984.png' alt='icon' width='60px' />
                                <p>{Math.round(weatherData.maxTemp)}° | {Math.round(weatherData.minTemp)}°</p>
                            </div>
                            <div className='col'>
                                <img src='https://cdn-icons-png.flaticon.com/512/4052/4052984.png' alt='icon' width='60px' />
                                <p>{Math.round(weatherData.maxTemp)}° | {Math.round(weatherData.minTemp)}°</p>
                            </div>
                            <div className='col'>
                                <img src='https://cdn-icons-png.flaticon.com/512/4052/4052984.png' alt='icon' width='60px' />
                                <p>{Math.round(weatherData.maxTemp)}° | {Math.round(weatherData.minTemp)}°</p>
                            </div>
                            <div className='col'>
                                <img src='https://cdn-icons-png.flaticon.com/512/4052/4052984.png' alt='icon' width='60px' />
                                <p>{Math.round(weatherData.maxTemp)}° | {Math.round(weatherData.minTemp)}°</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    } else {
        const apiKey = "270106a3f5a21174f5ff707d4e85434d";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return 'Loading...'
    }

}

export default Weather