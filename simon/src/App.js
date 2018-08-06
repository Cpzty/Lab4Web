import React, { Component,Fragment } from 'react';

import './App.css';

let x =0;

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      colors: ['red','blue','green','yellow'],
      playersequence: [],
      count:0

    }
    
    this.render = this.render.bind(this);
    this.activateradomLight = this.activaterandomLight.bind(this);
    this.deactivateLight = this.deactivateLight.bind(this);
  }
  
  activaterandomLight(){
    //this.setState({turnedOn: ' on'},)
    let rng = Math.floor(Math.random()*this.state.colors.length)
    this.state.colors[rng] = this.state.colors[rng]+ ' on'
    console.log(rng)
    this.setState({playersequence: this.state.colors[rng]},)
    this.forceUpdate()
    this.setState({count: 1})
    setTimeout(function(){this.deactivateLight()}.bind(this),1200)
    
    setTimeout(function(){this.activateradomLight()}.bind(this),1200)
    
    
    x+=1
  }
  

  deactivateLight(){
    
    for(let i=0; i<this.state.colors.length; i+=1){
      if(i===0){
        this.state.colors[0] = 'red'
        this.forceUpdate()
      } 
      else if(i===1){
        this.state.colors[1] = 'blue'
        this.forceUpdate()
      }
      
      else if(i===2){
        this.state.colors[2] = 'green'
        this.forceUpdate()
      }
      
      else if(i===3){
        this.state.colors[3] = 'yellow'
        this.forceUpdate()
      }
      
    }
    
    
    
  }
  
  render() {
    
    return (
      <Fragment>
      <div className="App">
        <Color onMouseUp={()=>(this.deactivateredLight())}onMouseDown={()=>(this.activaterandomLight())} name={this.state.colors[0]}/>
        <Color name={this.state.colors[1]}/>
        <Color name={this.state.colors[2]}/>
        <Color name={this.state.colors[3]}/>
      </div>
      
      <div>
      <button  onMouseDown={()=>(setTimeout(function(){this.activaterandomLight()}.bind(this),1000))}>Hallo</button>
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
    this.state.playersequence.push(this.props.name)
   // console.log(this.state.playersequence[0])
    
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
      <div 
    className={this.props.name+this.state.turnedOn}>
      </div>
    
    
    </Fragment>
    );
  }
}

export default App;
