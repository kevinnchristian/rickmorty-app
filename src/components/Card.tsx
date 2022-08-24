import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  StyleSheet
} from 'react-native';
import { useState } from 'react';

import { CardModal } from './CardModal';

type Props = {
  id: number,
  image: string,
  name: string,
  gender: string,
  species: string,
  status: string,
}

export function Card({
  id,
  image,
  name,
  gender,
  species,
  status
}: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.cardBody}>
      <Image
        style={styles.cardImage}
        source={{ uri: image }}
      />

      <View style={styles.cardTextBox}>
        <Text
          style={styles.cardTextName}
          numberOfLines={1}
        >{name}</Text>
        <Text style={styles.cardText}> {gender} </Text>

        <Pressable
          style={styles.cardDetailsButton}
          onPress={() => setShowModal(!showModal)}
        >
          <Text style={styles.cardTextDetailsButton}>Details</Text>
        </Pressable>
      </View>

      <CardModal
        id={id}
        image={image}
        name={name}
        gender={gender}
        species={species}
        status={status}
        showModalCard={showModal}
        callbackShowModalCard={value => setShowModal(value)}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  cardBody: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width - 150,
    backgroundColor: '#B65CF2',
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
  cardTextBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  cardTextName: {
    color: '#F4F4F6',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cardText: {
    color: '#F2D64B',
    fontSize: 15,
    fontWeight: '500',
  },
  cardDetailsButton: {
    backgroundColor: '#05F2AF',
    borderRadius: 4,
    marginTop: 15,
    marginBottom: 5,
    paddingHorizontal: 20,
    paddingVertical: 6
  },
  cardTextDetailsButton: {
    color: '#0C1440',
    fontSize: 13,
    fontWeight: 'bold'
  },
});