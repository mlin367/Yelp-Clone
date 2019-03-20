import React from 'react';

const About = props => (
  <div className="about container mt-4">
    <h1>About</h1>
    <p>
      This is a simple application made to emulate the most basic
      functionalities of Yelp. As such, a basic rundown of what the application
      does is that it gets the user's location and then the user can type a
      query to find nearby places, which is pulled from the Google Maps API.
    </p>
    <p>
      The search results will list some basic information like address and
      rating of each place. A click on each entry will give further details such
      as hours and reviews. The user can also save places they like and then
      access them in the saved tab (data is persisted in a database). They can
      also delete saved places in the save tab as well.
    </p>
    <p>
      Note: requires geolocation-compatible browsers
    </p>
    Tech Stacks:
    <ul>
      <li>React</li>
      <li>Redux</li>
      <li>React Router</li>
      <li>Node.js -> Express</li>
      <li>PostgreSQL</li>
      <li>Google Maps API</li>
      <li>Bootstrap</li>
    </ul>

    <span>Made by: Matthew Lin</span>
  </div>
);

export default About;
