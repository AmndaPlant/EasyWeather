import React from 'react';
import moment from 'moment';

const DayCard = ({reading}) => {
  let newDate = new Date();
  const weekDay = reading.dt * 1000;
  newDate.setTime(weekDay);

  const img = `owf owf-${reading.weather[0].id} owf-5x`

  return (
    <div className="col-sm-2">
      <div className="card">
        <h3 className="card-title">{moment(newDate).format("dddd")}</h3>
        <p className="text-muted">{moment(newDate).format("MMMM Do, h:mm a")}</p>
        <i className={img}></i> 
        <h2>{Math.round(reading.main.temp)} °C</h2>
        <div className="card-body">
          <p className="card-text">{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
}

export default DayCard;