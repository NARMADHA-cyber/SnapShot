import React, { Component } from 'react'
import './index.css'
export default class Buttonpanel extends Component {
  
  
  constructor(props){
    super(props);
  }
  handleclick(name0,name1){
    this.props.Clickhandle(name0,name1);
  }
  render() {
  
    return (
      <div className='button'>
        <button onClick ={()=>(this.handleclick('All', 'Z'))}className='al'>All</button>
        <button onClick={()=> (this.handleclick('Mountains','M'))}className='Mo'>Mountains</button>
        <button onClick={()=>{this.handleclick('Flowers','F')}} className='F1'>Flowers</button>
        <button onClick={()=>{this.handleclick('Trees','T')}}className='Tr'>Trees</button>
      </div>
    );
  }
}

