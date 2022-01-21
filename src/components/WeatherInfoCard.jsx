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
                {weatherData.coord.lat ?? 12}, {weatherData.coord.lon ?? 23}
              </li>
              <li>
                {weatherData.weather[0].main} and{' '}
                {weatherData.weather[0].description}
              </li>
              <li>{weatherData.main.temp}</li>
              <li>Wind Speed: {weatherData.wind.speed}</li>
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
