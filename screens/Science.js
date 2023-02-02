import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

export default class Science extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"yellow"}}> Science Facts </Text>
        <Text> </Text>
        <Text style={styles.points}>1) If you flew to the Sun from the{"\n"} moon in a normal plane,it{"\n"} would take about 20 years!.</Text>
        <Text> </Text>
        <Text style={styles.points} >2) eating cheese at the end of a meal{"\n"} can help neutralise the acids in your{"\n"} mouth and reduce the chance of{"\n"} tooth decay.</Text>
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