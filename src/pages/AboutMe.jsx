import React from "react";
import { Link } from "react-router-dom";
import myBike from "../assets/myBike.jpg";
import picasso from "../assets/picasso.jpg";
import kimsFinca from "../assets/kimsFinca.jpg";
import Peru from "../assets/Peru.jpg";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  alignItems: "center"
};
const contentContainer = {
  display: "flex",
  flexDirection: "row"
};
const textContainer = {
  diplay: "flex",
  width: 400
};
const picassoPic = {
  width: 700,
  height: 400
};
const myBikePic = {
  width: 700,
  height: 400
};

function AboutMe() {
  return (
    <div className="App" style={containerStyle}>
      <Link to="/">Home</Link>
      <h1>About Me</h1>

      <div style={contentContainer}>
        <img src={picasso} alt="Picasso" style={picassoPic} />
        <p style={textContainer}>
          When I’m not working you can probably find me building a web project ,
          doing yoga, mountain biking, listening to music or relaxing by a body
          of water. I’m also a huge fan of South America and am excited to
          continue exploring down there and getting more fluent in Spanish. Que
          pienses?
        </p>
        <img src={myBike} alt="My Bike" style={myBikePic} />
      </div>

      <div style={contentContainer}>
        <img src={Peru} alt="My Bike" style={myBikePic} />

        <img src={kimsFinca} alt="Picasso" style={picassoPic} />
      </div>
    </div>
  );
}

export default AboutMe;
