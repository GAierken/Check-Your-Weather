import React, {useEffect} from 'react';
import SideMenu from './Components/Menu'
import WeatherList from './Components/DailyWeatherList'
import {Header, Container, Grid} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { requestApiData, requestActiveItemData } from "./redux/actions"
import Geocode from "react-geocode"
import { Switch, Route } from 'react-router-dom';
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

//  const renderWeather = (renderProps) => {
//       const slug = renderProps.match.params.slug
//       props.requestActiveItemData(slug)
//       Geocode.fromAddress(slug)
//       .then(r => {
//           const {lat, lng} = r.results[0].geometry.location
//             console.log(lat, lng)
//            props.requestApiData({lat, lng});
          
//   },
//   error => {
//   console.error(error)
//   })
//  }

  return (
    <React.Fragment>
      <Header textAlign='center' as='h1' size="huge" color='violet' style={headerStyle}>{props.activeItem}</Header>
      <Grid columns='2'>
          <SideMenu />
            <Container style={{"margin-top": "50px"}}textAlign='center'>
                <WeatherList />
            </Container>
      </Grid>
        
        {/* <Switch>
          <Route path='/:slug' render={renderWeather}/>
        </Switch> */}
    </React.Fragment>
      
   
  );
}



const mapStateToProps = state => ({ ...state });



export default connect(mapStateToProps, {requestApiData, requestActiveItemData})(App);
