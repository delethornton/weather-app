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
        const lat = parseInt(position.coords.latitude);
        const long = parseInt(position.coords.longitude);
        // Fetching weather data here.
        console.log(lat, long);
        this.fetchWeatherData(lat, long);
      });
    }
    console.log('The main component mounted.');
  }
  fetchWeatherData(lat = undefined, lon = undefined, city = undefined) {
    const fetchURL =
      lat && lon
        ? `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=1bc55e140b5483d414b6ca4597e49138`
        : `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=1bc55e140b5483d414b6ca4597e49138`;

    fetch(fetchURL)
      .then((data) => {
        return data.json();
      })
      .then((dataJSON) => {
        const weatherData = dataJSON;
        this.setState({ weatherData });
      })
      .catch((error) => {
        console.log(error);
        console.log('Problem fetching data.');
      });
    console.log('Fetching weather data');
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('Clicked');
    console.log(e.target[0].value);
    this.fetchWeatherData(null, null, e.target[0].value);
    // Fetch weather data here.
  }
  render() {
    return (
      <main>
        <WeatherInfoCard weatherData={this.state.weatherData}></WeatherInfoCard>
        <form onSubmit={this.handleSubmit}>
          <input type="search" placeholder="City Name"></input>
          <input type="submit" value="Get Weather"></input>
        </form>
      </main>
    );
  }
}

export default Main;
