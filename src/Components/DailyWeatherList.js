import React from 'react'
// semantic ui styling -- GA
import { List } from 'semantic-ui-react'
// redux related -- GA
import { connect } from 'react-redux'
// moment js to change epoch time to readable date and time -- GA
import moment from 'moment'
//trigger modal in redux -- GA
import {requestModalData} from "../redux/actions"
// modal component -- GA
import DayModal from './Modal'


const WeatherList = (props) => {


// handle specific date clicking -- GA
const handleClick = (ele) => {
  let data = {day: ele, status: true}

  //trigger modal and pass down specific day weather object -- GA
   props.requestModalData(data)
}

// make sure api send back object -- GA
if(props.weathers.length !== 0){
     // map through seven dates weather array -- GA
    return props.weathers.daily.map((ele) => {

      // changing icon string to specific icon image -- GA
      let iconCode = ele.weather[0].icon;
      let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

      // transforming Kelvin to Fahrenheit -- GA
      let temp = Math.trunc((ele.temp.day - 273.15) * 9/5 + 32)

       return( 
         <React.Fragment>
            <List divided key={ele.dt} onClick={() => handleClick(ele)}>
              <List.Item >
                <List.Content>
                    <List.Header as='a'> Date: {moment.unix(ele.dt).format("MM/DD/YYYY")} Temp: {temp} °F</List.Header>
                    <img id="wicon" src={iconUrl} alt="Weather icon"></img>
                </List.Content>
              </List.Item>
            </List>
            <DayModal/>
         </React.Fragment>
   
      ) 
           
       
    })
    
  
}else{

  return null
}
}
// redux related -- GA
const mapStateToProps = (state) => {
 
  return {
     weathers: state.weathers,
     day: state.clickedDay,
     status: state.modalStatus
  }
}


export default connect(mapStateToProps, {requestModalData})(WeatherList)