import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
const apiUrl = "http://api.openweathermap.org/data/2.5/"
const api = process.env.REACT_APP_WEATHER_API_KEY

export default class sideMenu extends Component {
  


  state = { activeItem: 'New York, NY' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    console.log(name)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=b189bd79d077113ba7f92cc757207908`)
    .then(r => r.json())
    .then(data => {
      console.log(data.weather)
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