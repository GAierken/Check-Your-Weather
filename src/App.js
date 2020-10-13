import React, { Component } from 'react';
// side navigation -- GA
import SideMenu from './Components/Menu'
// 7 days forecast list -- GA
import WeatherList from './Components/DailyWeatherList'
// styling --GA
import {Header, Container, Grid} from 'semantic-ui-react'
// redux related -- GA
import { connect } from 'react-redux'
// actions related -- GA
import { requestApiData, requestActiveItemData } from "./redux/actions"
// take city name and change into latitude and longitude -- GA
import Geocode from "react-geocode"
// trying react router -- GA 
// import { Switch, Route } from 'react-router-dom';


// get key --GA
Geocode.setApiKey(process.env.REACT_APP_MAP_API_KEY)
const headerStyle ={
  padding: '20px'
}


class App extends Component{
  //customized style for header --  GA
 

  // default new york when loading -- GA

//   componentDidMount(){
//     //web page title will be selected city --GA
//     document.title = this.props.activeItem

//     // geocode selected city to lat , lng -- GA
//     Geocode.fromAddress(this.props.activeItem)
//     .then(r => {
//         const {lat, lng} = r.results[0].geometry.location
//        //call One call api -- GA
//          this.props.requestApiData({lat, lng});
        



  //// react router doesn't work as intended -- GA
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
render(){
  return (
    <React.Fragment>
      <Header textAlign='center' as='h1' size="huge" color='violet' style={headerStyle}>{this.props.activeItem}</Header>
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
  )
      
   
      }

  
}


// redux related -- GA
const mapStateToProps = state => ({ ...state });



export default connect(mapStateToProps, {requestApiData, requestActiveItemData})(App);
