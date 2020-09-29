import React from 'react'
import { List } from 'semantic-ui-react'
import { connect } from 'react-redux'
import moment from 'moment'
import {requestModalData} from "../redux/actions"
import DayModal from './Modal'


const WeatherList = (props) => {


const handleClick = (ele) => {
  let data = {day: ele, status: true}
   props.requestModalData(data)
}

console.log(props)
if(props.weathers.length !== 0){
     
    return props.weathers.daily.map((ele) => {
      let iconCode = ele.weather[0].icon;
      let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
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

const mapStateToProps = (state) => {
 
  return {
     weathers: state.weathers,
     day: state.clickedDay,
     status: state.modalStatus
  }
}


export default connect(mapStateToProps, {requestModalData})(WeatherList)