import React, {useEffect} from 'react';
import SideMenu from './Components/Menu'
import WeatherList from './Components/DailyWeatherList'
import {Header, Container} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { requestApiData } from "./redux/actions"
import Geocode from "react-geocode"
Geocode.setApiKey(process.env.REACT_APP_MAP_API_KEY)


function App(props) {
  const headerStyle ={
     padding: '20px'
  }

  useEffect(() => {
    document.title = props.activeItem
    Geocode.fromAddress(props.activeItem)
    .then(r => {
        const {lat, lng} = r.results[0].geometry.location
       
         props.requestApiData({lat, lng});
        
},
error => {
console.error(error)
})
 });

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
