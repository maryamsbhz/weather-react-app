import React,{useState} from 'react';
import './App.css';
import Forecast from "./Forecast.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon";

function Search(props){
  let [city,setCity]=useState(props.defaultCity)
  const [weather, setWeather] = useState({ ready: false });


  function showWeather(response){
    setWeather({
      ready:true,
      coord:response.data.coord,
      name : response.data.name,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      pressure : response.data.main.pressure,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  function search(){
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=094780c710fa4efd669f0df8c3991927&units=metric`;
    axios.get(apiUrl).then(showWeather);
    
  }

  function updateCity(event){
    setCity(event.target.value)
  }
  if (weather.ready) {
    return(
      <div className="container m-2">
        <div className="search-form">
          <form className="search-city d-flex" role="search" onSubmit={handleSubmit} >
            <input className="search-text-input form-control m-2 me-2" type="search" placeholder="Search" aria-label="Search" onChange={updateCity} />
            <input className="btn btn-outline-success m-2" type="submit" value="Search" />
          </form>
        </div>
        <div className="row mt-3">
          <div className="description col-6">
            <FormattedDate date ={weather.date} />
          
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
              <span ><strong className="temp">{weather.temperature}</strong><span className="unit">°C</span> </span><hr />
            </div>
            <div className="air-condition">
              <h3 className="condition text-capitalize">{weather.description}</h3> 
                <div className="icon">
                <WeatherIcon code={weather.icon} size={60} />
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className='Forcast m-2'> 
          <Forecast coords={weather.coord} />
        </div>
      </div>
      )
  }
  else{
    search();
    return "Loading...";
  }
}

export default Search;