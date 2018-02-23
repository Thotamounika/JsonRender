
import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {Container,Left,Thumbnail,Button,Icon,Content,Text,Card,CardItem,Body} from 'native-base';

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

                <CardItem style={styles.container}>
                  
                    <Button transparent>
                      <Icon active name="ios-person" style={styles.iconcontainer}/>
                      <Text>{item.userId}</Text>
                    </Button>
                  
                  
                    <Button transparent>
                      <Icon active name="ios-book" style={styles.iconcontainer}/>
                      <Text>{item.id}</Text>
                    </Button>
                  
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



const styles = StyleSheet.create({
    iconcontainer: {
      color:"gray",
      marginRight:0,
     
    },
    container: {
    flex: 1,
    justifyContent: 'space-around',
  },
    
  });


export default AppBodyData;
