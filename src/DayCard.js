import React from 'react';
import moment from 'moment';

const DayCard = ({reading, degreeType}) => {
  let newDate = new Date();
  const weekDay = reading.dt * 1000;
  newDate.setTime(weekDay);

  const img = `owf owf-${reading.weather[0].id} owf-5x`

  const celsius = Math.round(reading.main.temp)
  const fahrenheit = Math.round((celsius * 9 / 5) + 32);
  const desc = reading.weather[0].description.charAt(0).toUpperCase() + reading.weather[0].description.slice(1);

  return (
    <div className="col-sm-2">
      <div className="card">
        <h3 className="card-title">{moment(newDate).format("dddd")}</h3>
        <p className="text-muted">{moment(newDate).format("MMMM Do, h:mm a")}</p>
        <i className={img}></i> 
        <h2>{degreeType === "celsius" ? celsius + "°C" : fahrenheit + "°F"}</h2>
        <div className="card-body">
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default DayCard;