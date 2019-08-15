import React from "react";

const Form = props => {
  // in future setState property of countryCodes : [ us, uk, ca, co, ed] by selecting from a menu

  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="country" placeholder="Country..." />
      <input type="text" name="city" placeholder="City..." />
      <button>Get Weather</button>
    </form>
  );
};

export default Form;
