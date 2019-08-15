import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

/////////  Weather Tracker Componenets /////////
import Titles from "../components/WeatherFinder/Titles";
import Form from "../components/WeatherFinder/Form";
import Weather from "../components/WeatherFinder/Weather";

import TopNav from "../components/TopNav";

import cartagena1 from "../assets/cartagena1.jpg";

//import { url } from "inspector";

const ContainerStyle = {
  display: "flex",
  flexDirection: "row",
  border: "15px solid black",
  height: "800px",
  width: "auto"
};
const SideNavStuff = {
  display: "flex",
  flexDirection: "column",
  border: "15px solid green",
  width: "20%",
  backgroundColor: "#2d6cfd ",
  justifyContent: "space-around"
};
const buttons = {
  backgroundColor: "grey"
};
const MainPageStuff = {
  display: "flex",
  flexDirection: "column",
  color: "blue",
  border: "15px solid pink",
  width: "80%",
  backgroundImage: `url(${cartagena1})`
};

class MainPage extends React.Component {
  //initial state of the apps property before the api call
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    //e.preventDefault(); VERY IMPORTANT this prevents page from continously reloading
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=a4da66da8ca68871cc97effb563a1c2c&units=imperial`
    );
    const data = await api_call.json();

    if (city && country) {
      console.log(data);

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter Country and City"
      });
    }
  };
  render() {
    return (
      <div className="App">
        <TopNav />
        <div style={ContainerStyle}>
          <div style={SideNavStuff}>
            <button style={buttons}>
              {" "}
              <Link to="/AboutMe">About Me</Link>
            </button>
            <button style={buttons}>
              <Link to="/Resume">Resume</Link>
            </button>
            <button style={buttons}>
              <Link to="/ExerciseTracker">Exercise Tracker</Link>
            </button>
          </div>
          <div style={MainPageStuff}>
            <Titles />
            <Form getWeather={this.getWeather} />
            <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
