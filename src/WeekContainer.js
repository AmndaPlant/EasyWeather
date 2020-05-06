import React from 'react';
import apiConfig from './apiKeys';
import DayCard from './DayCard';
import DegreeToggle from './DegreeToggle';

class WeekContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullData: [],
      dailyData: [],
      degreeType: "celsius"
    }
  }

  updateForecastDegree = event => {
    this.setState({
      degreeType: event.target.value,
    }, () => console.log(this.state));
  }

  componentDidMount() {
    const weatherURL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=Ottawa&units=metric&APPID=${apiConfig.owmKey}`;

    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        const dailyData = data.list.filter((reading) => reading.dt_txt.includes("18:00:00"))
        this.setState({
          fullData: data.list,
          dailyData: dailyData,
        }, () => console.log(this.state));
      });
  }

  formatDayCards() {
    return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} degreeType={this.state.degreeType}/>);
  }

  render() {
    return (
      <div className="container">
        <h1 className="display-1 jumbotron">5-Day Forecast</h1>
        <h5 className="display-5 text-muted">Ottawa, ON</h5>
        <DegreeToggle degreeType={this.state.degreeType} updateForecastDegree={this.updateForecastDegree} />
        <div className="row justify-content-center">
          {this.formatDayCards()}
        </div>
      </div>
    );
  }
}

export default WeekContainer;