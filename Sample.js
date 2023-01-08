import React  from 'react';
import axios from "axios";
export default class Sample extends React.Component {
      
   constructor (props){
    super(props);
    this.state={
      vari : []
    }
   }
  render() {
    
    axios.get('https://reqres.in/api/users?page=2').then(res =>{
        console.log(res);
        this.setState({vari : res})
    })
    return (
      <div></div>
    )
  }
}
