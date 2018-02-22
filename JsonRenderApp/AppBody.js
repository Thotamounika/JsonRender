
import React, { Component } from 'react';

import {Container, Content,Text} from 'native-base';
import AppBodyData from './AppBodyData';
class AppBody extends Component {


constructor(){
  super()
  this.state={
    data:[]
  }
}

getData(){

  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({data: responseJson});
    })
    .catch((error) => {
      console.error(error);
    });
}

  componentDidMount(){
    this.getData();
  }
  render() {
    return (
     <AppBodyData data={this.state.data}/>
    );
  }
}

export default AppBody;
