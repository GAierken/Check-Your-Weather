import React from 'react';
import SideMenu from './Components/Menu'
import WeatherList from './Components/DailyWeatherList'
import {Header, Container} from 'semantic-ui-react'



function App() {
  const headerStyle ={
     padding: '20px'
  }
  
 

  return (
    <React.Fragment>
      <Header textAlign='center' as='h1' size="huge" color='violet' style={headerStyle}>Check Your Weather</Header>
        <SideMenu />
        <Container textAlign='right'>
            <WeatherList />
        </Container>
        
    </React.Fragment>
      
   
  );
}



export default App;
