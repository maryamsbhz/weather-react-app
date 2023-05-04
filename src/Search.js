import React,{useState} from 'react';
import './App.css';
import Forecast from "./Forecast.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function Search(){
  let [city,setCity]=useState("")
   const [weather, setWeather] = useState({});


  function showWeather(response){
    setWeather({
      name : response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure : response.data.main.pressure,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
    console.log(response.data)
  }
  function handleSubmit(event){
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=094780c710fa4efd669f0df8c3991927&units=metric`;
    axios.get(apiUrl).then(showWeather);
    
  }

  function updateCity(event){
    setCity(event.target.value)
  }

  return(
    <div className="container">
      <div className="search-form">
        <form className="search-city d-flex" role="search" onSubmit={handleSubmit} >
          <input className="search-text-input form-control m-2 me-2" type="search" placeholder="Search" aria-label="Search" onChange={updateCity} />
          <input className="btn btn-outline-success m-2" type="submit" value="Search" />
        </form>
      </div>
      <div className="row mt-3">
        <div className="description col-6">
          <span className="current-time">current time</span>
          <h1 className="city">{weather.name}</h1>
          <hr />
          <ul className="info">
            <li>Humidity: <span className="humidity">{weather.humidity}</span>%</li>
            <li>Wind: <span className="wind">{weather.wind}</span> m/h</li>
            <li>pressure: <span className="pressure">{weather.pressure}</span>hpa</li>
          </ul>
        </div>
        <div className="left-boxes col-4 mt-2 p-1"  >
          <div className="temperature">
            <h6>temperature</h6>
            <span ><strong className="temp">{Math.round(weather.temperature)}</strong> °C</span><hr />
          </div>
          <div className="air-condition">
            <h3 className="condition">{weather.description}</h3> 
            <img src={weather.icon} alt="{weather.description}" className="icon" /><hr />
          </div>
        </div>
      </div>
      <Forecast />
    </div>


  )
}

export default Search;