import React, { useState } from "react";
import axios from "axios";
import "../stylesheets/Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


function Weather(props) {
    const [city, setCity] = useState(props.defaultCity)
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            city: response.data.name,
            coordinates: response.data.coord,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: response.data.weather[0].icon,
        });

    }

    function search() {
        const apiKey = "d1a86552de255334f6117b348c4519bd";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }


    function changeCity(event) {
        event.preventDefault();
        setCity(event.target.value);
    }




  return (
      <div className="Weather">
          <form onSubmit={handleSubmit}>
              <div className="row">
                  <div className="col-9">
                      <input
                          type="search"
                          placeholder="Enter a city..."
                          className="form-control"
                          onChange={changeCity}
                      />
                  </div>
                  <div className="col-3">
                      <input
                          type="submit"
                          value="Search"
                          className="btn btn-primary"
                      />
                  </div>
              </div>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
  )
}

export default Weather