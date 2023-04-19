import React from 'react';
import PageTitle from '../coreComponents/pageTitle';

class Home extends React.Component {
   render() {
    return (
        <div>
            <PageTitle pageTitle={"Welcome"} description={"Welcome to fitness app"}/>
            <a href="/activity">Enter</a>
        </div>
    );
  }
}

export default Home;