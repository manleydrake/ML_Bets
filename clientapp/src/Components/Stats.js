import React, {Component} from 'react';



export class Stats extends Component{
constructor(props){
    super(props);
    this.state ={
        Teams:''
    
    } 
}

fetchInfo(){
    var https = require('follow-redirects').https;
    var fs = require('fs');
    
    var options = {
      'method': 'GET',
      'hostname': 'balldontlie.io',
      'path': '/api/v1/teams',
      'headers': {
      },
      'maxRedirects': 20
    };
    
    var req = https.request(options, function (res) {
      var chunks = [];
    
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
    
      res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });
    
      res.on("error", function (error) {
        console.error(error);
      });
    });
    
    req.end();
}
componentDidMount(){
    this.fetchInfo();
}
componentDidUpdate(){
    
}

render(){
    
    return(
        <div>
            <h1>Hello</h1>
         </div>
    )
}
}