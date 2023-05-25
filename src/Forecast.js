import React,{useState} from 'react';
import WeatherForecastDay from './WeatherForecastDay';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Forcast.css';
import axios from "axios";
import WeatherForecastDay from './WeatherForecastDay';

function Forecast(props){
  let [loaded,setLoaded]=useState(false);
  let [forecast,setForecast]=useState();


  function handleForecast(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }


  if(loaded){
    return(
      <div className='row'>
        <div className='col'>
          <WeatherForecastDay data={forecast[0]} />
        </div>
      </div>
    );  
  } else{
      let longitude = props.coords.lon;
      let latitude = props.coords.lat;
      let apiKey = "094780c710fa4efd669f0df8c3991927";
      let apiUrl =`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleForecast);
      return("Loading...");
    }
   
 

  
  
}

export default Forecast;