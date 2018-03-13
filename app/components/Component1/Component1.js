import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class Component1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : 'State',
      showName : true,
      messsage : this.props.messsage
    }
  }
  static defaultProps = {
    messsage:'Hi how are you?'
  }
 render(){
  console.log('Hello');
  let name = this.state.showName ? this.state.name : 'There is no name available'
    return(
      <View>
        <Text>{this.state.messsage}</Text>
        <Text>{name}</Text>
      </View>
      );

 } 
}