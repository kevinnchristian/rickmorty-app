import { ActivityIndicator, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from 'expo-font';

import { RMCharacter } from "./src/screens/RMCharacter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    'get_schwifty': require('./src/assets/fonts/get_schwifty.ttf')
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {
        fontsLoaded ?
          <RMCharacter />
          :
          <ActivityIndicator size="large" color="#d2d3d2" />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#0C1440",
    paddingTop: StatusBar.currentHeight - 15
  }
});