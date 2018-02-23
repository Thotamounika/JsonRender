
import React, { Component } from 'react';

import {Container,Left,Thumbnail, Content,Text,Card,CardItem,Body} from 'native-base';

class AppBodyData extends Component {


  render() {


    let items=this.props.data.map(function(item,index){

      return(

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('./Bulb.png')} />
                <Body>
                  <Text>{item.title}</Text>
                  
                </Body>
              </Left>
            </CardItem>
            <CardItem content>
              <Text style={{flex: 1, justifyContent: 'center',textAlign: 'justify',color:'gray'}}>{item.body}</Text>
            </CardItem>
            </Card>

        )
    });



    return (
      <Content>
        {items}
      </Content>
    );
  }
}

export default AppBodyData;
