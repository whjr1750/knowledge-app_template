import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Nature extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"lightgreen"}}> Disney film Facts </Text>
        <Text> </Text>
        <Text style={styles.points}>1) in Tangled movie, the scene in{"\n"}  which rapunzel is watching the{"\n"} lamps closely for the first time on{"\n"} her birthday with eugene on the  {"\n"}boat,that scene contains total 45,000 lamps. </Text>
        <Text> </Text>
        <Text style={styles.points} >2) Anna of frozen is the first disney {"\n"}princess to sing a song with the {"\n"}villain of the movie. she is recently {"\n"}the queen of Arendelle.  </Text>
        
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 100 
    },
  points:{
    fontSize: 20
  },
    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"green",
    margin: 10,
    width: 200,
    height: 50,
  }
})