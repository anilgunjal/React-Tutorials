import React from 'react';
import './App.css';

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
    
  componentDidMount(){
    console.log("mounted");
    this.setState({name:"ANil Gunjal"})
  } 

  // component did mount means when all the components like all tags gets created then this function gets called.
  // here name value before component mount was a Madhu Gunjal but after component gets rendered then componentDidMount changes its value and new value become ANil Gunjal.

  // console O/P =>
  // constructor
  // render
  // mounted
  // render

  // when we modify the state value then again component gets re-render 

  componentWillMount(){
    console.log("will mount");
    this.setState({name:"Nandu Gunjal"})
  } 

  // component will mount means before all the components like all tags gets created then this function gets called.
  
  // console O/P =>
  // constructor
  // will mount
  // render
  // mounted
  // render

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
        { this.state.isShow ? (<img src="https://images.unsplash.com/photo-1604423203943-54721eff418a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" />) : null}
        
      </div>
    )  
  }
}
export default Appclass;
