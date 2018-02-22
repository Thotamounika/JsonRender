
import React, { Component } from 'react';

import {Container, Content,Text,Card,CardItem,Body} from 'native-base';

class AppBodyData extends Component {


  render() {


    let items=this.props.data;



    return (
      <Content>
       <Card>

       <CardItem>
            <Body>
              <Text>
              UserId:{items.userId}
              </Text>          
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
              ID: {items.id}
              </Text>          
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
              Title: {items.title}
              </Text>          
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
              Body: {items.body}
              </Text>          
            </Body>
          </CardItem>
      </Card>
      </Content>
    );
  }
}

export default AppBodyData;
