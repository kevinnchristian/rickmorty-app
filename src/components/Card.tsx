import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  StyleSheet
} from "react-native";

type Props = {
  uri_image: string;
  name: string;
  gender: string;
}

export function Card({ uri_image, name, gender }: Props) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.cardImage}
        source={{ uri: uri_image }}
      />

      <View style={styles.textBox}>
        <Text
          style={styles.textName}
          numberOfLines={1}
        >
          {name}
        </Text>
        <Text style={styles.text}> {gender} </Text>

        <Pressable style={styles.moreButton}>
          <Text style={styles.moreText}>
            Details
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width - 150,
    backgroundColor: "#B65CF2",
    borderRadius: 10,
    margin: 12,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  cardImage: {
    height: 200,
    width: 220,
    borderRadius: 4
  },
  textBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15
  },
  textName: {
    color: "#F4F4F6",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center'
  },
  text: {
    color: "#F2D64B",
    fontSize: 15,
    fontWeight: '500',
  },
  moreButton: {
    backgroundColor: "#05F2AF",
    borderRadius: 4,
    marginTop: 15,
    marginBottom: 5,
    paddingHorizontal: 20,
    paddingVertical: 6
  },
  moreText: {
    color: "#0C1440",
    fontSize: 13,
    fontWeight: "bold"
  }
});