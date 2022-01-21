import React from 'react';

class WeatherInfoCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (Object.keys(this.props.weatherData).length > 0) {
      return (
        <div>
          <div>
            <ul>
              <li>Dallas, USA</li>
              <li>Longitude, Latitude</li>
              <li>Main and descriptor</li>
              <li>Temp</li>
              <li>Wind speed and direction</li>
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
