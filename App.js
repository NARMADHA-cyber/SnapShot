
import React from 'react';
import './App.css';
import Buttonpanel from './Buttonpanel';
import ImageGallery from './ImageGallery';
import Sample from './Sample';

class App extends React.Component{
constructor(props){
  super(props);
  this.state ={
    heading:'',
    pictname:''
  };
}
 handleclick=(name2,name3)=>{
  this.setState(
    {
      heading:name2,
      pictname:name3
    }
  );
 }
 render() {
  return (
    <div className="App">
     <Buttonpanel Clickhandle = {this.handleclick}/>
     <h1 className='heading'>{this.state.heading}</h1>
     <ImageGallery imagename={this.state.pictname}/>
     <Sample/>
    </div>
  );
}
}
export default App;
