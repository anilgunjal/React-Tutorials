import React from 'react';
import './App.css';

class Appclass extends React.Component {
  constructor(props){
    super(props)
    this.state = {name:"Anil Gunjal"};
  }
  render() {
  return <div>Name = {this.state.name}</div>;
  }
}
export default Appclass;
