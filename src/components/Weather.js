import React, { useState } from "react";
import axios from "axios";
import "../stylesheets/Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
//import WeatherForecast from "./WeatherForecast";


function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false })
    const [city, setCity] = useState(props.defaultCity);


    const handleResponse = (response) => {
        setWeatherData({
            city: response.data.name,
            description: response.data.weather[0].description,
            coordinates: response.data.coord,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: response.data.weather[0].icon,
            maxTemp: response.data.main.temp_max,
            minTemp: response.data.main.temp_min,
            ready: true,
        })
       

    }


    const searchCity = (e) => {
        const apiKey = "270106a3f5a21174f5ff707d4e85434d";
        /*alternative KEY = 9412b2adf899e4d1b182d55750bb4d03*/
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchCity();
    }

    const handleCityChange = (e) => {
        e.preventDefault();
        setCity(e.target.value)
    }




    if (weatherData.ready) {
        return (
            <div className="Weather">
                <div className='container'>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-9">
                                <input
                                    type="search"
                                    placeholder="Enter a city..."
                                    className="search"
                                    onChange={handleCityChange}
                                />
                            </div>
                                <div className='col-3'>
                                    <input
                                        type="submit"
                                        value="Search"
                                        className="btn"
                                    />
                                </div>
                        </div>
                    </form>
                    <WeatherInfo data={weatherData} />
                    <WeatherForecast coordinates={weatherData.coordinates} />
                </div>

            </div>
        );
    } else {
        searchCity();
        return 'Loading...';
    }

}

export default Weather