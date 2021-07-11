import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import ReactModal from "./modal";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { connect } from "react-redux";

const localizer = momentLocalizer(moment);
const ReactCalendar = (props) => {
  const [modal, setModal] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const handleModal = () => {
    setModal(false);
  };

  //Sort key value : time
  function compare(a, b) {
    const A = a.time;
    const B = b.time;

    let comparison = 0;
    if (A > b) {
      comparison = 1;
    } else if (A < B) {
      comparison = -1;
    }
    return comparison;
  }
  props.user.sort(compare);

  const CustomToolbar = () => {
    return <></>;
  };

  return (
    <div style={{ height: 700 }}>
      <Calendar
        events={props.user}
        components={{ toolbar: CustomToolbar }}
        localizer={localizer}
        onNavigate
        views={["month"]}
        date={new Date(props.yearValue, props.monthValue - 1, 1)}
        onSelectEvent={(events) => {
          setModal(true);
          setUserDetails(events);
        }}
      />

      <ReactModal
        modalValue={modal}
        modalShow={handleModal}
        user={userDetails}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
  };
}

export default connect(mapStateToProps, null)(ReactCalendar);
