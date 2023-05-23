import './App.css';
import Search from "./Search.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Search defaultCity="New York"/>
      <p className='mt-4'><a href="https://github.com/maryamsbhz/weather-react-app">open-source code by</a> Maryam Sabahizadeh</p>
      
    </div>   
  );
}

export default App;
