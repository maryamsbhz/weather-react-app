import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){

  function maxTemperature(){
    let maxTemp =Math.round(props.data.temp.max)
    return (`${maxTemp}°`)
  }
  function minTemperature(){
    let minTemp =Math.round(props.data.temp.min)
    return (`${minTemp}°`)
  }
  function day(){
    let days =["Sun", "Mon", "Tue","wed","Thu","Fri","Sat"];
    let date = new Date(props.data.dt * 1000);
    let day =days[date.getDay()] ;


    return day;
  }

  return(
    <div>
      <div className="forcast-day mb-3">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={40}/>
      <div className='Forcast-temperature'>
        <span className='max-temp'>{maxTemperature()}</span>
        <span className='min-temp'>{minTemperature()}</span>
      </div>
    </div>
  )
}