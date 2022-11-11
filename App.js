import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  PermissionsAndroid,
} from "react-native";
import Tuner from "./screens/Tuner";
import Note from "./screens/Note";
import Meter from "./screens/Meter";
import GetClosestString from "./screens/TunerFunction";

export default class App extends Component {

  
  state = {
    note: {
      name: "A",
      octave: 4,
      frequency: 440,
    },
  };

  _update(note) {
    this.setState({ note });
  }

  async componentDidMount() {
    if (Platform.OS === "android") {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
    }

    const tuner = new Tuner();
    tuner.start();
    tuner.onNoteDetected = (note) => {
      if (this._lastNoteName === note.name) {
        this._update(note);
      } else {
        this._lastNoteName = note.name;
      }
    };
  }

  render() {
    return (
      <View style={style.body}>
        <StatusBar backgroundColor="#000" translucent />
        <GetClosestString/>
        <Meter cents={this.state.note.cents} />
        <Note {...this.state.note} />
        <Text style={style.frequency}>
          {this.state.note.frequency.toFixed(1)} Hz
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  frequency: {
    fontSize: 28,
    color: "#37474f",
  },
});

// import { SafeAreaView, StyleSheet, Text, View ,StatusBar} from 'react-native'
// import React,{useEffect,useState} from 'react'
// import MeterFunction from './screens/MeterFunction'
// import NoteFunction from './screens/NoteFunction'
// import TunerFunction from './screens/TunerFunction'
// import Tuner from './screens/Tuner'
// import Meter from "./screens/Meter";
// import Note from "./screens/Note";

// const App = () => {
//   // const [state, setState] = useState()
//    state = {
//     note: {
//       name: "A",
//       octave: 4,
//       frequency: 440,
//     },
//   };
  
//  const _update=(note)=> {
//     this.setState({ note });
//   };
// const _lastNoteName=()=>{

// }
//   useEffect(() => {
//     const tuner = new Tuner();
//     tuner.start();
//     tuner.onNoteDetected = (note) => {
//       if(this._lastNoteName=== note.name){
//         _update(note);

//       }else{
//        this._lastNoteName = note.name;
//       }
//     };
  
   
//   }, [])
  
//   return (
//     <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>

//     <View>
//     <StatusBar backgroundColor="#000" translucent />
//     <Meter cents={this.state.note.cents} />
//     <Note {...this.state.note} />
//     <Text style={styles.frequency}>
//            {this.state.note.frequency.toFixed(1)} Hz
//         </Text>
//       {/* <TunerFunction/> */}
//     </View>
//     </SafeAreaView>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   body: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       },
//       frequency: {
//         fontSize: 28,
//         color: "#37474f",
//       },
// })




// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import GetClosestString from './screens/TunerFunction'


// const App = () => {
//   return (
//     <View>
//   <GetClosestString/>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})













// import React, {useState,useEffect} from 'react';
// //  import { StatusBar } from 'react-native';

// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
 
//   Text,
//   useColorScheme,
//   View,
//   Button
// } from 'react-native';

// import Tuner from './screens/Tuner';






// const App = () => {
// const handleButtonPress = () => {
//   // LocalNotification();
// }

//   return (
//     <SafeAreaView style={{flex:1}}>

//     <View style={{flex:1,justifyContent:'center',marginTop:2,alignContent:'center'}}>
//       <View  style={{marginTop:10,backgroundColor:'purple'}}>
     
//     </View>
    
//       <Tuner/>
     
//     </View>
//     </SafeAreaView>
   
//   );
// };

// export default App;




















