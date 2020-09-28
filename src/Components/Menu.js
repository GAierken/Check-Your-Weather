import React, { Component } from 'react'
import { Menu, Input, Button } from 'semantic-ui-react'
import Geocode from "react-geocode"
import { connect } from 'react-redux'
import { requestApiData, requestActiveItemData } from "../redux/actions"


Geocode.setApiKey(process.env.REACT_APP_MAP_API_KEY)

 class SideMenu extends Component {
  
        state ={
          searchValue: ""
        }

     componentDidUpdate(){
        document.title = this.props.activeItem
     }

  handleItemClick = (e, { name }) => {

    
      this.props.requestActiveItemData({name})

    Geocode.fromAddress(name)
        .then(r => {
            const {lat, lng} = r.results[0].geometry.location
           
             this.props.requestApiData({lat, lng});
            
  },
  error => {
    console.error(error)
  })

   

  }

 handleOnChange = (e) => {
       
       let value = e.target.value.toLowerCase()
       if(value.length >= 2){
        this.setState({
          searchValue: value[0].toUpperCase() + value.substring(1)
        })
       }
    
 }

 handleClick = () => {
   let name = this.state.searchValue
    
   this.props.requestActiveItemData({name})

   Geocode.fromAddress(name)
        .then(r => {
            const {lat, lng} = r.results[0].geometry.location
           
             this.props.requestApiData({lat, lng});
            
  },
  error => {
    console.error(error)
  })

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
          <Input size="mini" onChange={this.handleOnChange} placeholder='Search...'/>
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
