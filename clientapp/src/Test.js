import React, {Component} from 'react';

export class Test extends Component{

constructor(props){
    super(props);
    this.state ={
        deps:[]
    
    } 
}

fetchInfo(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://localhost:5001/weatherforecast", requestOptions)
        .then(response => response.json())
        .then(result => this.setState({deps: result}))
        .catch(error => console.log('error', error));
}
componentDidMount(){
    this.fetchInfo();
}
componentDidUpdate(){
    //this.fetchInfo();
}

render(){
    //const {deps} = this.state;
    return(
        <div>
        {this.state.deps.map(( deps2, index) => (
            <h1>{deps2.date}</h1>
        ))}
         </div>
    )
}
}