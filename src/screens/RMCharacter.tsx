import {
  View,
  Dimensions,
  StyleSheet,
  StatusBar,
  ScrollView
} from "react-native";
import { useEffect, useState } from "react";

import { Card } from "../components/Card";

import Api from "../services/Api";
import { ICharacter } from "../types";

export function RMCharacter() {
  return (
    <ScrollView
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <View style={styles.container}>
        <Card
          uri_image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          name="Rick Sanchez"
          specie="Human"
          gender="Male"
        />
        <Card
          uri_image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          name="Rick Sanchez"
          specie="Human"
          gender="Male"
        />
        <Card
          uri_image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          name="Rick Sanchez"
          specie="Human"
          gender="Male"
        />
        <Card
          uri_image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          name="Rick Sanchez"
          specie="Human"
          gender="Male"
        />
        <Card
          uri_image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          name="Rick Sanchez"
          specie="Human"
          gender="Male"
        />
        <Card
          uri_image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          name="Rick Sanchez"
          specie="Human"
          gender="Male"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center"
  },
});