import React, {Component} from 'react';
import {Text, View, TextInput, Switch} from 'react-native'

export default class Component3 extends Component {
  constructor(){
    super();
    this.state = {
      name : 'Mohit',
      swtichValue: false
    }
  }

  onSubmit(){
    alert("adfasdffs");
  }

  onChange(value){
    // alert(value);
    this.setState({
      name : value
    })
  }
  onSwitchChange(value){
     this.setState({
      swtichValue : value
    })
  }

 render(){
  console.log('Hello');
    return(
      <View>
         <TextInput
         placeholder = "Enter text"
        // style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(value) => this.onChange(value)}
        onSubmitEditing= {this.onSubmit}

         value={this.state.name}
      />
      <Text>{this.state.name} </Text>
      <Switch 
        value ={this.state.swtichValue}
        onValueChange={(value)=> this.onSwitchChange(value)}
      />
      </View>
      );

 } 
}