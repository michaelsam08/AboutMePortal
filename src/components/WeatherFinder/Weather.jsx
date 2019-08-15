import React from "react";
//(props) are being passed from parent component App to this child component "Weather"
// this is a functional "stateless" component so there is not a "this" object to refer to,
//
const Weather = props => {
  return (
    <div>
      {props.city && props.country && (
        <p>
          Location: {props.city} {props.country}
        </p>
      )}
      {props.temperature && <p>Temperature: {props.temperature}</p>}
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      {props.description && <p>Conditions: {props.description}</p>}
      {props.error && <p> {props.error}</p>}
    </div>
  );
};

export default Weather;
