import React from 'react';

function PageTitle({pageTitle, description}) {
    return (
      <header>
        <h2>{pageTitle}</h2>
        <p>{description}</p>
      </header>
    );
}

export default PageTitle;