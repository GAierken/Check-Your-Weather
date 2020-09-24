import React, {useState} from 'react';
import SideMenu from './Components/Menu'
import WeatherList from './Components/DailyWeatherList'
import {Header} from 'semantic-ui-react'

import './App.css';

function App() {
  const headerStyle ={
     padding: '20px'
  }
  
  const [weatherObj, setWeatherObj] = useState({})


  const setWeather = (weather) => {
        // console.log(weather)
        setWeatherObj(weather)
  }

  return (
    <React.Fragment>
      <Header textAlign='center' as='h1' size="huge" color='violet' style={headerStyle}>Check Your Weather</Header>
        <SideMenu setWeather={setWeather}/>
        <WeatherList weather={weatherObj}/>
    </React.Fragment>
      
   
  );
}

export default App;
