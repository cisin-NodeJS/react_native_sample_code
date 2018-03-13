import React, {Component} from 'react';
import {Text, View} from 'react-native'

export default class Component6 extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     name : 'State',
  //     showName : true,
  //     messsage : this.props.messsage
  //   }
  // }
 render(){
  console.log('Hello');
  // let name = this.state.showName ? this.state.name : 'There is no name available'
    return(
      <View>
        <Text>Component6</Text>
       
      </View>
      );

 } 
}