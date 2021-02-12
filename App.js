import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ImageDefault from "./src/components/ImageDefault";
import Welcome from "./src/components/Welcome";
import ButtonDefault from "./src/components/ButtonDefault";

class App extends Component {
  render() {
    let nome = "Mislene";
    return (
      <View style={styles.container}>
        <Welcome />

        <Text style={{ fontSize: 20, fontWeight:"bold" }}>
          Lorem Ipsum is simply dummy text of the {nome}
        </Text>
        <br />
        <ImageDefault largura={320} altura={240} />
        <br />
        <ButtonDefault fonte={30} corDaBorda="#2195" cor="#FFF" corFundo="#2196F3"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
});

export default App;
