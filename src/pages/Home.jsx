import React from 'react';
import PageTitle from '../coreComponents/pageTitle';

class Home extends React.Component {
   render() {
    return (
        <div>
            <PageTitle pageTitle={"Welcome"}/>
            <p>Welcome to fitness app</p>
            <a href="/activity">Enter</a>
        </div>
    );
  }
}

export default Home;