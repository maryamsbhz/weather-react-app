import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Forcast.css';
import axios from "axios";
import WeatherForecastDay from './WeatherForecastDay';


function Forecast(props){
  let[loaded,setLoaded] = useState(false);
  let[forecast,setForecast]=useState(null);

  function handleForecast(response){
    
    setForecast(response.data.daily);
    setLoaded(true); 
  }

  useEffect(()=>{
    setLoaded(false);
  },[props.coordinates])
  
  if(loaded){
    console.log(props)
    return(
      <div className='row'>
        {forecast.map(function  (dailyForecast,index){
          if(index<5){
            return(
              <div className='col' key={index} >
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );

  } else{
      let longitude = props.coordinates.lon;
      let latitude = props.coordinates.lat;
      let apiKey = "094780c710fa4efd669f0df8c3991927";
      let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleForecast);
      return("Loading...")
  }

}

export default Forecast;