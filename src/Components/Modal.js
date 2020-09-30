import React from 'react'
// semantic ui styling -- GA
import { Modal } from 'semantic-ui-react'
// redux related -- GA
import { connect } from 'react-redux'

// modal trigger -- GA
import {requestModalData} from '../redux/actions'
// moment js to transform epoch time to human readable date
import moment from 'moment'

function DayModal(props) {
   
   // make sure pass down true value
    if(props.day){
        return(
            <Modal
              closeIcon
              dimmer="blurring"
              size="mini"
              open={props.status}
              onClose={() => props.requestModalData({status: false})}
            >
              <Modal.Header>{moment.unix(props.day.dt).format("MM/DD/YYYY")}</Modal.Header>
              <Modal.Content>
                 Sunrise: {moment.unix(props.day.sunrise).format('h:mm:ss a')}
              </Modal.Content>
              <Modal.Content>
                Sunset: {moment.unix(props.day.sunset).format('h:mm:ss a')}
              </Modal.Content>
              <Modal.Content>
                Description: {props.day.weather? props.day.weather[0].description : null}
              </Modal.Content>
               <Modal.Content>
                   Wind speed: {props.day["wind_speed"]}
               </Modal.Content>
            </Modal>
           )
    }else{
        return null
    }
    
}



const mapStateToProps = (state) => {

    return(
      {
          status: state.modalStatus,
          day: state.clickedDay
     }
      )
  }


export default connect(mapStateToProps, {requestModalData})(DayModal)