import React from 'react';
import WeatherInfoCard from './WeatherInfoCard';
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const geo = navigator.geolocation;
    if (geo) {
      geo.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        // Fetching weather data here.
      });
    } else {
      this.setState({});
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('Clicked');
    // Fetch weather data here.
  }
  render() {
    return (
      <main>
        <WeatherInfoCard weatherData={this.state.weatherData}></WeatherInfoCard>
        <form onSubmit={this.handleSubmit}>
          <input type="search"></input>
          <input type="submit" value="Get Weather"></input>
        </form>
      </main>
    );
  }
}

export default Main;
