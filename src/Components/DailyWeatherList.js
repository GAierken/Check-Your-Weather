import React from 'react'
import { List } from 'semantic-ui-react'
import { connect } from 'react-redux'
import moment from 'moment'


const WeatherList = (props) => {
  
//day, date, temperature, & weather icon
   


if(props.weathers.length !== 0){
     
    return props.weathers.daily.map((ele) => {
      var iconcode = ele.weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
       return( 
       <List divided key={ele.dt}>
        <List.Item>
           <List.Content>
                <List.Header as='a'> Date: {moment.unix(ele.dt).format("MM/DD/YYYY")}</List.Header>
                <img id="wicon" src={iconurl} alt="Weather icon"></img>
           </List.Content>
       </List.Item>
      </List>
      ) 
           
       
    })
    
  
}else{

  return null
}
}

const mapStateToProps = (state) => {
 
  return {
     weathers: state.weathers
  }
}


export default connect(mapStateToProps)(WeatherList)