import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useState, useEffect } from 'react';

import { Card } from '../components/Card';

import Api from '../services/Api';
import { ICharacter } from '../types';

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
        <Text style={styles.title}>Rick Morty Effect</Text>
        {
          character?.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              gender={item.gender == 'unknown' ? 'Unknown' : item.gender}
              species={item.species == 'unknown' ? 'Unknown' : item.species}
              status={item.status == 'unknown' ? 'Unknown' : item.status}
            />
          ))
        }
      </View>
    </ ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  title: {
    color: '#05F2AF',
    fontSize: 42,
    fontFamily: 'get_schwifty',
    textShadowColor: '#F2D64B',
    textShadowOffset: { width: -2, height: 1.8 },
    textShadowRadius: 6,
    padding: 20,
  }
});