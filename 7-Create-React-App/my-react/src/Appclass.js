import React from 'react';
import './App.css';
import Images from './components/images';

class Appclass extends React.Component {
  constructor(props){
    super(props)
    this.state = {name:"Madhu Gunjal", isShow:true};
    this.handleClick = this.handleClick.bind(this);
    console.log("constructor");
  }

  // handleClick = () =>{
  //   this.setState({isShow:!this.state.isShow});
  // }
    
  // This means when the <Images /> componet gets removed while clocking on the toggle button then componentWillUnmount gets called

  componentDidMount(){
    console.log("mounted");
    this.setState({name:"ANil Gunjal"})
  } 

  componentWillMount(){
    console.log("will mount");
    this.setState({name:"Nandu Gunjal"})
  } 

  handleClick(){
    this.setState({isShow:!this.state.isShow});
  }
  render() {
    console.log("render");
    return (
      <div className="mainDiv">
        <div className="textDiv">
          <h3>Onclick Event</h3>
          <h3>Name = {this.state.name }</h3>
          <button onClick={this.handleClick}>Toggle</button>
        </div>
        { this.state.isShow ? <Images /> : null}
        
      </div>
    )  
  }
}
export default Appclass;
