
import React, { Component } from 'react';
import {Container, Content,Text,Card,Body} from 'native-base';
import {StyleSheet} from 'react-native';
import AppBody from './AppBody';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Content>
           <AppBody/>
        </Content>
      </Container>
       

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
