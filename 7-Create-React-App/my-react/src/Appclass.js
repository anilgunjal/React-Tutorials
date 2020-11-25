import React from 'react';
import './App.css';

class Appclass extends React.Component {
  constructor(props){
    super(props)
    this.state = {isShow:true};

    // states are immutable means you can't change the state directly
  }
  render() {
    return (
      <div className="mainDiv">
        <div className="textDiv">
          <h3>Onclick Event</h3>
          <button onClick={ () =>  this.setState({isShow:!this.state.isShow})}>Toggle</button>
        </div>
        { this.state.isShow ? (<img src="https://images.unsplash.com/photo-1604423203943-54721eff418a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" />) : null}
        
      </div>
    )  
  }
}
export default Appclass;
