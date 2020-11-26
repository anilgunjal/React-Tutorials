import React from 'react';
import './App.css';

class Appclass extends React.Component {
  constructor(props){
    super(props)
    this.state = {isShow:true};
    this.handleClick = this.handleClick.bind(this);
    // states are immutable means you can't change the state directly
  }

  // handleClick = () =>{
  //   this.setState({isShow:!this.state.isShow});
  // }
    
  // if we use the Norman function handliClick(){} then it will give the error like can not read property setState of undefined because function won't getting isShow.
  // To solve this we are using bind function, for Arrow function not needed the bind function.

  handleClick(){
    this.setState({isShow:!this.state.isShow});
  }
  render() {
    return (
      <div className="mainDiv">
        <div className="textDiv">
          <h3>Onclick Event</h3>
          <button onClick={this.handleClick}>Toggle</button>
        </div>
        { this.state.isShow ? (<img src="https://images.unsplash.com/photo-1604423203943-54721eff418a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" />) : null}
        
      </div>
    )  
  }
}
export default Appclass;
