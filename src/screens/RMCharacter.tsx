import { 
  View,
  Text,
  Pressable,
  StyleSheet
} from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';

export function RMCharacter() {
  return(
    <View style={styles.container}>
      <Text>Iniciando o Projeto.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});