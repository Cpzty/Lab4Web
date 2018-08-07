import React, { Component,Fragment } from 'react';

import './App.css';

let x =0;

let count =0;

let playersequence = [];

let micontador =0;

let timestop;

let noinput = false;

let botsequence = [];

let colors = ['red','blue','green','yellow'];



class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      colors: ['red','blue','green','yellow'],
      playersequence: [],
      count:0,
      turnedOn: '',
      turnedOn1: '',
      turnedOn2: '',
      turnedOn3: '',
      

    }
    
    this.render = this.render.bind(this);
    this.activateradomLight = this.activaterandomLight.bind(this);
    this.deactivateLight = this.deactivateLight.bind(this);
    this.myInterval = this.myInterval.bind(this);
  }
  
  activaterandomLight(count){
    //this.setState({turnedOn: ' on'},)
    setTimeout(function(){this.deactivateLight},2000*count)
    timestop =setTimeout(function(){this.myInterval()}.bind(this),1000);
    //clearInterval(timestop)
    
     
    
    
  }
  
  myInterval(){
    
    let rng = Math.floor(Math.random()*this.state.colors.length)
    botsequence.push(this.state.colors[rng]);
    if(this.state.colors[rng]==='red'){
    setTimeout(function(){this.deactivateLight()}.bind(this),1200)
    setTimeout(function(){this.setState({turnedOn: ''})}.bind(this),1200)
    this.setState({turnedOn: ' on'})
    console.log(colors[rng])
    console.log('realmente este es bot sequence: '+colors[rng])
    this.setState({playersequence: this.state.colors[rng]},)
    this.forceUpdate()
    }
    
    if(this.state.colors[rng]==='blue'){
    setTimeout(function(){this.deactivateLight()}.bind(this),1200)
    setTimeout(function(){this.setState({turnedOn1: ''})}.bind(this),1200)
    this.setState({turnedOn1: ' on'})
    console.log(colors[rng])
    console.log('realmente este es bot sequence: '+colors[rng])
    this.setState({playersequence: this.state.colors[rng]},)
    this.forceUpdate()
    }
    
    if(this.state.colors[rng]==='green'){
    setTimeout(function(){this.deactivateLight()}.bind(this),1200)
    setTimeout(function(){this.setState({turnedOn2: ''})}.bind(this),1200)
    this.setState({turnedOn2: ' on'})
    console.log(colors[rng])
    console.log('realmente este es bot sequence: '+colors[rng])
    this.setState({playersequence: this.state.colors[rng]},)
    this.forceUpdate()
    }
    
    if(this.state.colors[rng]==='yellow'){
    setTimeout(function(){this.deactivateLight()}.bind(this),1200)
    setTimeout(function(){this.setState({turnedOn3: ''})}.bind(this),1200)
    this.setState({turnedOn3: ' on'})
    console.log(colors[rng])
    console.log('realmente este es bot sequence: '+colors[rng])
    this.setState({playersequence: this.state.colors[rng]},)
    this.forceUpdate()
    }
    
    micontador+=1;
    
    
  }
  
  
  

  deactivateLight(){      
        colors[0] = 'red'
        colors[1] = 'blue'
        colors[2] = 'green'
        colors[3] = 'yellow'
        
      
      
    
    
    
    
  }
  
  render() {
    
    return (
      <Fragment>
      <div className="App">
        <Color onMouseUp={()=>(this.deactivateLight())}onMouseDown={()=>(this.activaterandomLight())} name={colors[0]+this.state.turnedOn}/>
        <Color name={colors[1]+this.state.turnedOn1}/>
        <Color name={colors[2]+this.state.turnedOn2}/>
        <Color name={colors[3]+this.state.turnedOn3}/>
      </div>
      
      <div>
      <button onMouseUp={()=>(setTimeout(function(){this.deactivateLight()}.bind(this),1000))}  onMouseDown={()=>(setTimeout(function(){this.activaterandomLight(count)}.bind(this),1000))}>Start/Next</button>
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
    this.deactivatered = this.deactivatered.bind(this);
  }
  
  deactivatered(){
    this.setState({turnedOn:''});
    
  }
  
  activateLight(){
    this.setState({turnedOn: ' on'},)
    this.state.playersequence.push(this.props.name)
    if(this.props.name === "red"){
      console.log()
      playersequence.push('red');
      setTimeout(function(){this.deactivateLight()}.bind(this),2000)
      console.log("el usuario ingreso "+playersequence[playersequence.length-1])
      if(playersequence[count]===botsequence[count]&&count!==botsequence.length-1){
        console.log('continuar')
        console.log(botsequence[botsequence.length-1])
        setTimeout(function(){this.deactivateLight()}.bind(this),2000)
        count=count+1;
        
        
      }else if(playersequence[count]!==botsequence[count]){
        console.log('perdio')
        console.log(botsequence[botsequence.length-1])
        setTimeout(function(){this.deactivateLight()}.bind(this),2000)
        count =0;
        playersequence=[];
        botsequence=[];
        
        
      }
      else{
        console.log('presionar el boton')
        count=0;
        playersequence =[];
        console.log('se vacio la secuencia'+playersequence)
      }
      
    }
    
    else if(this.props.name === "blue"){
      console.log()
      playersequence.push('blue');
      setTimeout(function(){this.deactivateLight()}.bind(this),2000)
      console.log("el usuario ingreso "+playersequence[playersequence.length-1])
      if(playersequence[count]===botsequence[count]&&count!==botsequence.length-1){
        console.log('continuar')
        console.log(botsequence[botsequence.length-1])
        setTimeout(function(){this.deactivateLight()}.bind(this),2000)
        count =count+1;
      }else if(playersequence[count]!==botsequence[count]){
        console.log('perdio')
        console.log(botsequence[botsequence.length-1])
        setTimeout(function(){this.deactivateLight()}.bind(this),2000)
        count =0;
        playersequence=[];
        botsequence=[];
        
      }
      else{
        console.log('presionar boton')
        count=0;
        playersequence =[];
        console.log('se vacio la secuencia'+playersequence)
      }
      
    }
    
    else if(this.props.name === "green"){
      console.log()
      playersequence.push('green');
      setTimeout(function(){this.deactivateLight()}.bind(this),2000)
      console.log("el usuario ingreso "+playersequence[playersequence.length-1])
      if(playersequence[count]===botsequence[count]&&count!==botsequence.length-1){
        console.log('continuar')
        console.log(botsequence[botsequence.length-1])
        setTimeout(function(){this.deactivateLight()}.bind(this),2000)
        count =count+1;
      }else if(playersequence[count]!==botsequence[count]){
        console.log('perdio')
        console.log(botsequence[botsequence.length-1])
        setTimeout(function(){this.deactivateLight()}.bind(this),2000)
        count =0;
        playersequence=[];
        botsequence=[];
        
       
      }
      else{
        console.log('presionar boton')
        count=0;
        playersequence =[];
        console.log('se vacio la secuencia'+playersequence)
      }
      
    }
    
    else if(this.props.name === "yellow"){
      console.log()
      playersequence.push('yellow');
      setTimeout(function(){this.deactivateLight()}.bind(this),2000)
      console.log("el usuario ingreso "+playersequence[playersequence.length-1])
      if(playersequence[count]===botsequence[count]&&count!==botsequence.length-1){
        console.log('continuar')
        console.log(botsequence[botsequence.length-1])
        setTimeout(function(){this.deactivateLight()}.bind(this),2000)
        count =count+1;
      }if(playersequence[count]!==botsequence[count]){
        console.log('perdio')
        console.log(botsequence[botsequence.length-1])
        setTimeout(function(){this.deactivateLight()}.bind(this),2000)
        count =0;
        playersequence=[];
        botsequence=[];
        
      }
      else{
        console.log('presionar boton')
        count=0;
        playersequence =[];
        console.log('se vacio la secuencia'+playersequence)
      }
      
    }
    
   // console.log(this.state.playersequence[0])
    
  }

  deactivateLight(){
    this.setState({turnedOn: ''},)
     colors[0] = 'red'
     colors[1] = 'blue'
     colors[2] = 'green'
     colors[3] = 'yellow'
    
    
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
      <div /*onMouseUp={()=>(setTimeout(function(){this.deactivateLight()}.bind(this),1000))}*/ onMouseDown={()=>(this.activateLight())}
    className={this.props.name+this.state.turnedOn}>
      </div>
    
    
    </Fragment>
    );
  }
}

export default App;
