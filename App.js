// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, { Component } from "react";
// import { Platform, StyleSheet, Text, View } from "react-native";

// const instructions = Platform.select({
//   ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
//   android:
//     "Double tap R on your keyboard to reload,\n" +
//     "Shake or press menu button for dev menu"
// });

// var SQLite = require("react-native-sqlite-storage");
// let db = SQLite.openDatabase(
//   { name: "hero-db", createFromLocation: "~sqlite.db", location: "Library" },
//   this.openCB,
//   this.errorCB
// );
// type Props = {};
// export default class App extends Component<Props> {
//   constructor(props) {
//     super(props);

//     this.state = {
//       id: "",
//       name: ""
//     };
//     db.transaction(tx => {
//       tx.executeSql("SELECT * FROM pet", [], (tx, results) => {
//         console.log("Query completed");

//         // Get rows with Web SQL Database spec compliance.

//         var len = results.rows.length;
//         for (let i = 0; i < len; i++) {
//           let row = results.rows.item(i);
//           console.log(row);
//         }

//         // Alternatively, you can use the non-standard raw method.

//         /*
//             let rows = results.rows.raw(); // shallow copy of rows Array

//             rows.map(row => console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`));
//           */
//       });
//     });
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5
//   }
// });

import App from "./navigation";
export default App;
