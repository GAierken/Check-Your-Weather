import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Geocode from "react-geocode"
import { connect } from 'react-redux'
import { fetchWeather } from '../redux/actions'

// const apiUrl = "http://api.openweathermap.org/data/2.5/onecall?"
// const api = process.env.REACT_APP_WEATHER_API_KEY

Geocode.setApiKey(process.env.REACT_APP_MAP_API_KEY)

 class SideMenu extends Component {
  


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
             console.log(this.props)
            // const { userId, dispatch } = this.props
            // dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId}})

            // console.log(lat, lng)
            // this.props.fetchWeather(lat, lng)
            // fetch(`${apiUrl}lat=${lat}&lon=${lng}&exclude=hourly,minutely&appid=${api}`)
            // .then(r => r.json())
            // .then(data => {
              // console.log(data)
            //   this.props.setWeather(data)
            // })

            //  this.setState({
            //    lat: lat,
            //    lng: lng
            // })
  },
  error => {
    console.error(error)
  })

   
  }


  

  render() {
    const { activeItem } = this.state


   
    return (
      <Menu pointing secondary vertical inverted color="violet" style={{'marginTop': '100px'}}>
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

const mapStateToProps = (state) => {

  return {
    
  }
}


export default connect(mapStateToProps, { fetchWeather })(SideMenu)