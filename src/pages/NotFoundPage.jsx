import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <h3> .....ERROR......WHATS...UP...why.R.U.doing..that????????????</h3>
    </div>
  );
};

export default NotFoundPage;
