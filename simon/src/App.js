import React, { Component,Fragment } from 'react';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <Fragment>
      <div className="App">
        <Color name={'red'}/>
        <Color name={'blue'}/>
        <Color name={'green'}/>
        <Color name={'yellow'}/>
      </div>
      </Fragment>
    );
  }
}

class Color extends Component {
  constructor(props){
    super(props);
    this.state = {
      turnedOn: '',
      botsequence: [],
      playersequence: [],
    };
    
    this.render = this.render.bind(this);
    this.setbackandforth = this.setbackandforth.bind(this);
    this.startSequence = this.startSequence.bind(this);
  }
  
  setbackandforth(){
    this.setState({turnedOn: ' on'},)
    
  }
  
  startSequence(){
      console.log('fick you')
    }
  
  render() {
    return (
      <Fragment>
      <div onClick={()=>(this.setbackandforth())} 
    className={this.props.name+this.state.turnedOn}>
      </div>
    
    
    
    </Fragment>
    );
  }
}

export default App;
