import React from "react";
import { connect } from "react-redux";

class Weather extends React.Component {

  formatTime = (time) => {
    let date = new Date(time * 1000);
    let hh = date.getHours();
    let mm = date.getMinutes();

    if(hh<10) hh = `0${hh}`;
    if(mm<10) mm = `0${mm}`; 
    if(hh>12) {
      hh = hh - 12;
      return hh !== 11 ?`0${hh}:${mm} PM`:`${hh}:${mm} PM`
    }
    return `${hh}:${mm} AM`;
  }

  render() {
    console.log(this.props.state);
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>City</th>
              <th>Status</th>
              <th>Temp</th>
              <th>Humidity</th>
              <th>Sunrise</th>
              <th>Sunset</th>
            </tr>
          </thead>
          <tbody>
            {this.props.state.map((city, index) => {
              return (
                <tr key={index}>
                  <td>{city.name}</td>
                  <td>
                    {city.weather[0].description.charAt(0).toUpperCase() +
                      city.weather[0].description.slice(1)}
                  </td>
                  <td>
                    {(city.main.temp - 273.15).toFixed(2)}
                    &#176;C
                  </td>
                  <td>{city.main.humidity}</td>
                  <td>{this.formatTime(city.sys.sunrise)}</td>
                  <td>{this.formatTime(city.sys.sunset)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {this.props.state.Error && <p>{this.props.state.error}</p>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.data
  };
};

export default connect(mapStateToProps)(Weather);
