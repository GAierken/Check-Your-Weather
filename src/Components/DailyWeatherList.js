import React from 'react'
import { List } from 'semantic-ui-react'

const WeatherList = (props) => {
  
console.log(props.weather.current? props.weather.daily : 'none' )
  
if(props.weather.current){
  

    return props.weather.daily.map((ele) => {
       return( 
       <List divided>
        <List.Item>
           <List.Content>
             <List.Header as='a'>{ele.weather[0].main}</List.Header>
           </List.Content>
       </List.Item>
      </List>
      ) 
           
       
    })
    
  
}else{
  return null
}
}

export default WeatherList