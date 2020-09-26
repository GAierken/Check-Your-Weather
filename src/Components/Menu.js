import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Geocode from "react-geocode"
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { requestApiData } from "../redux/actions"


Geocode.setApiKey(process.env.REACT_APP_MAP_API_KEY)

 class SideMenu extends Component {
  


  state = { 
    activeItem: 'New York'
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    Geocode.fromAddress(name)
        .then(r => {
            const {lat, lng} = r.results[0].geometry.location
           
             this.props.requestApiData({lat, lng});
            
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



const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
