
const React = require('react');
const { Component } = React

//class WordRelay extends React.Component{
class WordRelay extends Component{
    state={
        text: 'Hello, world' ,
    }
  
    render(){
        return(
            <h1>{this.state.text}</h1>

        )

    }
}

module.exports = WordRelay;