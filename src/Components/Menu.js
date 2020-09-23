import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Geocode from "react-geocode"

const apiUrl = "http://api.openweathermap.org/data/2.5/onecall?"
const api = process.env.REACT_APP_WEATHER_API_KEY

Geocode.setApiKey(process.env.REACT_APP_MAP_API_KEY)

export default class sideMenu extends Component {
  


  state = { 
    activeItem: 'New York',
    lat: '',
    lng: '' 
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    Geocode.fromAddress(name)
        .then(r => {
            const {lat, lng} = r.results[0].geometry.location
             this.setState({
               lat: lat,
               lng: lng
            })
  },
  error => {
    console.error(error)
  })

    this.fetchWeather()
  }

   fetchWeather = () => {
       console.log("working")
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,minutely&appid=b189bd79d077113ba7f92cc757207908")
            .then(r => r.json())
            .then(data => {
              console.log(data)
            })
  
  }
  

  render() {
    const { activeItem } = this.state
   
    return (
      <Menu pointing secondary vertical inverted color="violet">
        <Menu.Item
          name='New York'
          active={activeItem === 'New York'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Los Angeles'
          active={activeItem === 'Los Angeles'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Miami'
          active={activeItem === 'Miami'}
          onClick={this.handleItemClick}
        />
         <Menu.Item
          name='Other'
          active={activeItem === 'Other'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}