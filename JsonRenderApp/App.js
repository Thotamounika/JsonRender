
import React, { Component } from 'react';
import {Container,Header,Left,Button,Title,Right,Icon, Content,Text,Card,Body} from 'native-base';
import {StyleSheet} from 'react-native';
import AppBody from './AppBody';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Content>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>List Of the Titles</Title>
          </Body>
          <Right />
        </Header>
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
