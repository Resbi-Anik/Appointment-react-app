import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import ReactModal from './modal'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { connect } from "react-redux";
const localizer = momentLocalizer(moment);

const ReactCalendar = (props) => {
const [modal,setModal]=useState(false)
const [userDetails,setUserDetails]=useState(null)
  const handleModal=()=>{
    console.log('triggered');
     setModal(false)
  }

  
  console.log(props.user);
  return (
    <div style={{ height: 700 }}>
      <Calendar
      events= {[props.user]}
        // events={[
        //   {
        //     title: "My event",
        //     allDay: false,
        //     start: new Date(2021, 6, 10), // 10.00 AM
        //     end: new Date(2021, 6, 10), // 2.00 PM
            
        //   },
        //   {
        //     title: "My event2",
        //     allDay: false,
        //     start: new Date(2021, 7, 11, 10, 0), // 10.00 AM
        //     end: new Date(2021, 7, 11, 14, 0), // 2.00 PM
        //   },
        // ]}
        localizer={localizer}
        // step={60}
        // view="month"
        // views={["month"]}
        // defaultView="week"
        // step={60}
        // views={"allViews"}
        // defaultDate={new Date(2015, 3, 1)}
        min={new Date(2021, 2, 1)}
        max={new Date(2021, 11, 12)}
        // date={new Date(2021, 11, 7)}
        onSelectEvent={(events) => {
          console.log(events);
          setModal(true)
          setUserDetails(events)

        }}
      />
      <ReactModal modalValue= {modal} modalShow={handleModal} user={userDetails}/>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
  };
}

// export default ReactCalendar;
export default connect(mapStateToProps, null)(ReactCalendar);
