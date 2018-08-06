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
    this.activateLight = this.activateLight.bind(this);
    this.deactivateLight = this.deactivateLight.bind(this);
    this.startSequence = this.startSequence.bind(this);
  }
  
  activateLight(){
    this.setState({turnedOn: ' on'},)
    
  }

  deactivateLight(){
    this.setState({turnedOn: ''},)
    
  }                
  
  startSequence(){
      let i =0
      setInterval(function() {
        i+=1
        console.log(i)
        
      },1000);
    }
  
  render() {
    return (
      <Fragment>
      <div onMouseUp={()=>(setTimeout(function(){this.deactivateLight()}.bind(this),1000))} onMouseDown={()=>(this.activateLight())} 
    className={this.props.name+this.state.turnedOn}>
      </div>
    
    
    
    </Fragment>
    );
  }
}

export default App;
