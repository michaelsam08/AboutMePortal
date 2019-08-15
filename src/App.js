import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
///////////  Pages  Components//////////////
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
///////////// Exercise Tracker Components/////////
import Navbar from "./components/ExerciseTracker/navbar.component";
import ExercisesList from "./components/ExerciseTracker/exercises-list.component";
import EditExercise from "./components/ExerciseTracker/edit-exercise.component";
import CreateExercise from "./components/ExerciseTracker/create-exercise.component";
import CreateUser from "./components/ExerciseTracker/create-user.component";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/404" component={NotFoundPage} />
            <Route exact path="/AboutMe" component={AboutMe} />
            <Route exact path="/Resume" component={Resume} />
            <Route exact path="/ExerciseTracker" component={ExercisesList} />
            <Route exact path="/edit/:id" component={EditExercise} />
            <Route exact path="/create" component={CreateExercise} />
            <Route exact path="/user" component={CreateUser} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
