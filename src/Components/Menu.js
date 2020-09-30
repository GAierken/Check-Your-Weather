import React, { Component } from 'react'
import { Menu, Input, Button } from 'semantic-ui-react'
import Geocode from "react-geocode"
import { connect } from 'react-redux'
import { requestApiData, requestActiveItemData } from "../redux/actions"


Geocode.setApiKey(process.env.REACT_APP_MAP_API_KEY)

 class SideMenu extends Component {
        
       //input form handling  -- GA
        state ={
          searchValue: ""
        }
   
    // when city selected change web page title to it -- GA
     componentDidUpdate(){
        document.title = this.props.activeItem
     }
// when city is clicked
  handleItemClick = (e, { name }) => {

    //change webpage title to selected city
      this.props.requestActiveItemData({name})
   // transform city to lat lng
    Geocode.fromAddress(name)
        .then(r => {
            const {lat, lng} = r.results[0].geometry.location
            // call weather api -- GA
             this.props.requestApiData({lat, lng});
            
  },
  error => {
    // error handling  -- GA
    console.error(error)
  })

   

  }
 // handle search input change -- GA
 handleOnChange = (e) => {
       
       let value = e.target.value.toLowerCase()
       if(value.length >= 2){
        this.setState({
          // to make sure the web header can start with upper case and lower case rest name -- GA
          searchValue: value[0].toUpperCase() + value.substring(1)
        })
       }
    
 }

 // search input finished and handle search button click -- GA
 handleClick = () => {
   //form control -- GA
   let name = this.state.searchValue


   // change web page title 
   this.props.requestActiveItemData({name})
 

   // transform name to lat lng
   Geocode.fromAddress(name)
        .then(r => {
            const {lat, lng} = r.results[0].geometry.location
           // call weather Api
             this.props.requestApiData({lat, lng});
            
  },
  error => {
    // error handling
    console.error(error)
  })

  //after search click, state is back to empty -- GA
  this.setState({
    searchValue: ""
  })
    
 }

  render() {
    const { activeItem } = this.props

  
    return (
      <Menu  size="huge" pointing secondary vertical inverted color="violet" style={{'marginTop': '100px'}}>
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
         <Menu.Item>
         <Input type='text'  action>
          <Input size="mini" onChange={this.handleOnChange} placeholder='Search...' />
          <Button color="violet" inverted type='submit' size="mini" onClick={this.handleClick}>Search</Button>
        </Input>
         </Menu.Item>

      </Menu>
    )
  }
}



const mapStateToProps = (state) => {

  return(
    { ...state }
    )
};


export default connect(mapStateToProps,{ requestApiData, requestActiveItemData })(SideMenu);
