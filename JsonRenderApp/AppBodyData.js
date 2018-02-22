
import React, { Component } from 'react';

import {Container, Content,Text,Card,CardItem,Body} from 'native-base';

class AppBodyData extends Component {


  render() {


    let items=this.props.data.map(function(item,index){

      return(

          <Card>

              <CardItem>
                <Body>
                  <Text>
                    {item.title}
                  </Text>          
                </Body>
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
