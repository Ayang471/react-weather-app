import React from 'react'
import WeatherIcons from './WeatherIcons'

function WeatherForecastDays(props) {

    function maxTemp(){
        return Math.round(props.data.temp.max)
    }

    function minTemp(){
        return Math.round(props.data.temp.min)
    }

    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = [ "Sun", "Mon", "Tues", "Wed", "Thu","Fri", "Sat"];

        return days[day]
    }

  return (
    <div>
          <div className='forecast-day'>{day()}</div>
          <WeatherIcons code={props.data.weather[0].icon} size={45} />
          <div className='weather-forecast-temperature'>
              <span className='forecast-max-temp'>{maxTemp()}°</span>
              |
              <span className='forecast-min-temp'>{minTemp()}°</span>
          </div>
    </div>
  )
}

export default WeatherForecastDays