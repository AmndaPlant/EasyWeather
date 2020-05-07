import React from 'react';
import apiConfig from './apiKeys';
import DayCard from './DayCard';
import DegreeToggle from './DegreeToggle';
import SearchBar from './SearchBar';

class WeekContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullData: [],
      dailyData: [],
      degreeType: "celsius",
      city: "Ottawa",
    }
  }

  updateForecastDegree = event => {
    this.setState({
      degreeType: event.target.value,
    }, () => console.log(this.state));
  }

  handleSubmit = event => {
    this.fetchWeather(event.target[0].value);
    event.preventDefault();
  }

  componentDidMount() {
    this.fetchWeather(this.state.city);
  }

  fetchWeather(city) {
    const weatherURL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiConfig.owmKey}`;

    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        const dailyData = data.list.filter((reading) => reading.dt_txt.includes("18:00:00"))
        this.setState({
          fullData: data.list,
          dailyData: dailyData,
          city: city,
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
        <h5 className="display-5 text-muted">{this.state.city}</h5>
        <SearchBar city={this.state.city} handleSubmit={this.handleSubmit} /> 
        <DegreeToggle degreeType={this.state.degreeType} updateForecastDegree={this.updateForecastDegree} />
        <div className="row justify-content-center">
          {this.formatDayCards()}
        </div>
      </div>
    );
  }
}

export default WeekContainer;