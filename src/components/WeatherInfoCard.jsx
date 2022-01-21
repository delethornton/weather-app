import React from 'react';

class WeatherInfoCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (Object.keys(this.props.weatherData).length > 0) {
      const weatherData = this.props.weatherData;
      console.log(weatherData);
      return (
        <div>
          <div>
            <ul>
              <li>
                {weatherData.name}, {weatherData.sys.country}
              </li>
              <li>
                {weatherData.coord.lat} Lat., {weatherData.coord.lon} Lon.
              </li>
              <li>
                {weatherData.weather[0].main} and{' '}
                {weatherData.weather[0].description}
              </li>
              <li>{weatherData.main.temp} &deg;F</li>
              <li>Wind Speed: {weatherData.wind.speed} mph</li>
            </ul>
          </div>
          <p>Not your city?</p>
          <p>Find the weather in any city below.</p>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default WeatherInfoCard;
