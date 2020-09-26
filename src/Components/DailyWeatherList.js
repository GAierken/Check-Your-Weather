import React from 'react'
import { List } from 'semantic-ui-react'
import { connect } from 'react-redux'


const WeatherList = (props) => {
  
  console.log('list', props)

  return(
     null
  )
  
// if(props.weathers.length !== 0){
     
//     return props.weathers.daily.map((ele) => {
      
//        return( 
//        <List divided key={ele.dt}>
//         <List.Item>
//            <List.Content>
//              <List.Header as='a'>{ele.weather[0].main}</List.Header>
//            </List.Content>
//        </List.Item>
//       </List>
//       ) 
           
       
//     })
    
  
// }else{

//   return null
// }
}

const mapStateToProps = (state) => {
 
  return {
     weathers: state.weathers
  }
}


export default connect(mapStateToProps)(WeatherList)