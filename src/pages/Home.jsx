import React from 'react';
import PageTitle from '../coreComponents/pageTitle';

class Home extends React.Component {
  render() {
    return (
      <div>
        <PageTitle pageTitle={"Welcome"} description={"Welcome to fitness app"} />
        <nav className='home-nav'>
          <a href="/activity">Log</a>
          <a href="/exercises">View Exercises</a>
          <a href="/exercises">View Workouts</a>
        </nav>
      </div>
    );
  }
}

export default Home;