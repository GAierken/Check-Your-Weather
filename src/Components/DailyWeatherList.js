import React from 'react'
import { List } from 'semantic-ui-react'
import { connect } from 'react-redux'

const WeatherList = (props) => {
  

  
if(props.weathers.length !== 0){
     
    return props.weathers.daily.map((ele) => {
         console.log(ele)
       return( 
       <List divided >
        <List.Item>
           <List.Content>
             <List.Header as='a'>{ele.weather[0].main}</List.Header>
           </List.Content>
       </List.Item>
      </List>
      ) 
           
       
    })
    
  
}else{
  console.log('working')
  return null
}
}

const mapStateToProps = (state) => {
 
  return {
     weathers: state.weathers
  }
}


export default connect(mapStateToProps)(WeatherList)