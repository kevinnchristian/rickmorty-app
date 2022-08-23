import {
  View,
  Dimensions,
  StyleSheet,
  StatusBar,
  ScrollView
} from "react-native";
import { useState, useEffect } from "react";

import { Card } from "../components/Card";

import Api from "../services/Api";
import { ICharacter } from "../types";

export function RMCharacter() {
  const [character, setCharacter] = useState<ICharacter[]>();

  useEffect(() => {
    Api.get('character').then(res => {
      setCharacter(res.data.results);
    })
  }, []);

  return (
    <ScrollView
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <View style={styles.container}>
        {
          character?.map((item, index) => (
            <Card
              key={index.toString()}
              uri_image={item.image}
              name={item.name}
              specie={item.species}
              gender={item.gender}
            />
          ))
        }
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