import React from 'react';
import ReactDOM from 'react-dom';

// create a new component. This should produce some html.

const App = () => {
  return <div>Hi</div>;
}



// take this component's generated html and put it on the page in the dom.

ReactDOM.render(<App />, document.querySelector('.container'));
