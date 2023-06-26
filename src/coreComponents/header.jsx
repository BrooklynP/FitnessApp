import React from 'react';

function FitnessHeader({appTitle}) {
    return (
      <header>
        <h1><a href='/'>{appTitle}</a></h1>
      </header>
    );
}

export default FitnessHeader;