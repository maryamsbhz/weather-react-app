import React from 'react';
import WeatherIcon from "./WeatherIcon";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Forcast.css';


function Forecast(){
  return(
    <div className='Forcast m-2'> 
      <div className='row'>
        <div className='col'>
          <div className="forcast-day mb-3">Sat</div>
          <WeatherIcon code="09n" size={40}/>
          <div className='Forcast-temperature'>
            <span className='max-temp'>20</span>
            <span className='min-temp'>12</span>
          </div>
        </div>
        <div className='col'>
          <div className="forcast-day mb-3">Sat</div>
          <WeatherIcon code="09n" size={40}/>
          <div className='Forcast-temperature'>
            <span className='max-temp'>20</span>
            <span className='min-temp'>12</span>
          </div>
        </div>
        <div className='col'>
          <div className="forcast-day mb-3">Sat</div>
          <WeatherIcon code="09n" size={40}/>
          <div className='Forcast-temperature'>
            <span className='max-temp'>20</span>
            <span className='min-temp'>12</span>
          </div>
        </div>
        <div className='col'>
          <div className="forcast-day mb-3">Sat</div>
          <WeatherIcon code="09n" size={40}/>
          <div className='Forcast-temperature'>
            <span className='max-temp'>20</span>
            <span className='min-temp'>12</span>
          </div>
        </div>
        <div className='col'>
          <div className="forcast-day mb-3">Sat</div>
          <WeatherIcon code="09n" size={40}/>
          <div className='Forcast-temperature'>
            <span className='max-temp'>20</span>
            <span className='min-temp'>12</span>
          </div>
        </div>
        <div className='col'>
          <div className="forcast-day mb-3">Sat</div>
          <WeatherIcon code="09n" size={40}/>
          <div className='Forcast-temperature'>
            <span className='max-temp'>20</span>
            <span className='min-temp'>12</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forecast;