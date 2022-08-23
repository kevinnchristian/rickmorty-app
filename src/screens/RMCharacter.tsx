import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
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
    <ScrollView>
      <View style={styles.container}>
        {
          character?.map((item, index) => (
            <Card
              key={index.toString()}
              uri_image={item.image}
              name={item.name}
              gender={item.gender == 'unknown' ? 'Unknown' : item.gender}
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