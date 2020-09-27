import React from 'react';
import SideMenu from './Components/Menu'
import WeatherList from './Components/DailyWeatherList'
import {Header, Container} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { requestApiData } from "./redux/actions"


function App(props) {
  const headerStyle ={
     padding: '20px'
  }
  



  return (
    <React.Fragment>
      <Header textAlign='center' as='h1' size="huge" color='violet' style={headerStyle}>{props.activeItem}</Header>
        <SideMenu />
        <Container textAlign='right'>
            <WeatherList />
        </Container>
        
    </React.Fragment>
      
   
  );
}



const mapStateToProps = state => ({ ...state });



export default connect(mapStateToProps, {requestApiData})(App);
