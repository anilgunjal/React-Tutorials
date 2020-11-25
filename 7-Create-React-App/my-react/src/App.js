import logo from './logo.svg';
import './App.css';
import './assets/css/style.css'

let App  = ({name}) => {
  return (
  <div className="box">
      <span>{name}</span>
  </div>
  );
};

export default App;

//  What is Virtual DOM
// When we change anything in DOM then it's gets affetcted in Virtual DOM rather than affecting directly in Real DOM.
// When we render, React compares the virtual DOM and Real DOM, Then react finds the difference and re-render everything and at
// last both the DOM's comes at the same state

// Why Virtual DOM
// If there are 10 changes then we have to render Real DOM 10 times but Virtual DOM do all 10 changes in one goal.
