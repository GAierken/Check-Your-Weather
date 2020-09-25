import React, {useState} from 'react';
import SideMenu from './Components/Menu'
import WeatherList from './Components/DailyWeatherList'
import {Header, Container} from 'semantic-ui-react'
import { connect } from 'react-redux'


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
        <Container textAlign='right'>
            <WeatherList weather={weatherObj}/>
        </Container>
        
    </React.Fragment>
      
   
  );
}

const mapStateToProps = (state) => {
  
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(App);
