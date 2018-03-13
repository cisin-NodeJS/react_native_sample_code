import React, {Component} from 'react'; 
import {Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native'

export default class Component2 extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     name : 'State',
  //     showName : true,
  //     messsage : this.props.messsage
  //   }
  // }
  // static defaultProps = {
  //   messsage:'Hi how are you?'
  // }

  onPress(){
    alert('asdfasfdsff');
  }
 render(){
  console.log('Hello');
    return(
      <View>
            <View style={styles.myView} >
              <Text style={styles.myText}>This is Component2</Text>
            </View>
            <View style={styles.container}>

             <TouchableHighlight 
               onPress={this.onPress} 
               style={styles.v1}
               underlayColor='blue'
               >
              <View>
                    <Text>View 1</Text>
               </View>
            </TouchableHighlight>

            <TouchableOpacity 
            onPress={this.onPress}
            style={styles.v2}
            >
                  <View>
                        <Text>View 2</Text>
                   </View>
          </TouchableOpacity>

               
               
               <View style={styles.v3}>
                    <Text style={styles.vText}>View 3</Text>
               </View>
            </View>
      </View>
      );

 } 

}

const styles = StyleSheet.create({

  myView : {
    backgroundColor:'blue'
  },
  myText: {
    color:'white'
  },
  container : {
    flexDirection:'row',
    height : 100
  },
  v1 : {
    flex : 1,
    backgroundColor:'red',
    padding:10
  },
   v2 : {
    flex : 1,
    backgroundColor:'green',
     padding:10
  },
   v3 : {
    flex : 1,
    backgroundColor:'black',
     padding:10
  },
  vText :{
    color : 'white'
  }

});