import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Resume() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <h1>About Me Professionally</h1>
      <p>
        Working with open , collaborative, smart people excites me as I am a
        continuous learner. I prefer working on software that has a positive
        social impact or at least makes other people's lives easier. My approach
        is to always be interested in what you are working on and in those you
        are surrounded by. I love using React! State management and working with
        apis allow us to access information and let it impact the client ui any
        way you can creatively think of.
      </p>
      <p>
        Michael is an energetic and highly dependable Software Developer who
        loves to build things and solve problems. He uses the following
        technologies in his projects: JavaScript, React, Firebase, AWS, Express,
        Axios, Redux, MongoDB, SQL/SQL Server, Node.js, CSS and HTML. He is an
        effective, process-driven developer who is passionate about creating
        meaningful Client User Interfaces and offering DB solutions based on
        customer needs. Michael highly values collaboration and is an effective
        communicator of technical terms within all organizational areas. An
        enthusiastic problem solver with demonstrated experience contributing to
        and leading cross-functional teams.
      </p>
      <h1>Experience</h1>
      <h4>WEB INK</h4>
      <p>
        Austin, TX Role: Software Developer / Sole Proprietor 3/18-Present I am
        transitioning applications for an educational consulting company that
        are used in multiple school districts in the state of TX to web based
        and Software as a Service Strong client. Strong relationship management
        and communication skills enable me to effectively gather requirements
        and feedback from consultants to understand pain points and feature
        requests. The development of dashboard, modals and features of the
        front-end are done using JavaScript, React.js, and CSS. I'll implement
        asynchronous functions to retrieve or manipulate data external to the
        client. Sending and retrieving (CRUD functionality) data is accomplished
        by creating Routes, Models, Controller with express, node and connecting
        to MongoDB(mLab or MongoDB Atlas with AWS cloud storage).
      </p>
      <h4>VersaSuite EHR and HR</h4>
      <p>
        Austin, TX Role: Software Developer 11/18-6/19 Create meaningful
        portals, modules and features for patients, care providers, managers and
        employees using JavaScript, React and multiple libraries to maximize
        user experience through thoughtful placement of components and modules
        Utilize RESTful APIs with ASP.net (C#) models and controllers to
        communicate with our SQL/ SQL Server Db Build reusable components
        whenever possible that allow users to perform and/or see a multitude of
        tasks or file types I was asked to be project manager after 5 weeks in
        the role due to dependability and past business experience leading
        projects and teams (while I am an informal leader my focus is to become
        a better developer) Demo and present our web applications to clients,
        collect feedback and implement changes
      </p>
    </div>
  );
}

export default Resume;
