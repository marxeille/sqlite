import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flexDirection: "row",
    width: "90%",
    height: "10%",
    marginTop: 10
  },
  generalFontSize: {
    fontSize: 20
  },
  input: {
    height: 50,
    width: "45%",
    borderBottomWidth: 1,
    borderBottomColor: "#800080",
    marginHorizontal: 5
  },
  text: {
    width: "30%"
  },
  buttonContainer: {
    width: "25%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  buttonText: {
    color: "white"
  }
});
export default styles;
