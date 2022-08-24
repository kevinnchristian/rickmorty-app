import {
  View,
  Text,
  Image,
  Pressable,
  Modal,
  StyleSheet
} from 'react-native';

type Props = {
  id: number,
  image: string,
  name: string,
  gender: string,
  species: string,
  status: string,
  showModalCard: boolean,
  callbackShowModalCard: any,
}

export function CardModal({
  id,
  image,
  name,
  gender,
  species,
  status,
  showModalCard,
  callbackShowModalCard
}: Props) {
  return (
    <View>
      <Modal
        animationType='slide'
        visible={showModalCard}
        transparent={true}
        onRequestClose={() => callbackShowModalCard(!showModalCard)}
      >
        <View style={styles.modalBackgroud}>
          <Image
            style={styles.modalImage}
            source={{ uri: image }}
          />

          <View>
            <Text style={styles.modalTextDetails}>Name:
              <Text style={styles.modalTextDetailsInternal}>
                {' ' + name}
              </Text>
            </Text>
            <Text style={styles.modalTextDetails}>Gender:
              <Text style={styles.modalTextDetailsInternal}>
                {' ' + gender}
              </Text>
            </Text>
            <Text style={styles.modalTextDetails}>Species:
              <Text style={styles.modalTextDetailsInternal}>
                {' ' + species}
              </Text>
            </Text>
            <Text style={styles.modalTextDetails}>Status:
              <Text style={styles.modalTextDetailsInternal}>
                {' ' + status}
              </Text>
            </Text>
          </View>

          <Pressable
            style={styles.modalCloseButton}
            onPress={() => callbackShowModalCard(!showModalCard)}
          >
            <Text
              style={styles.modalCloseButtonText}
            >Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalBackgroud: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0c1440d6',
  },
  modalImage: {
    alignSelf: 'center',
    height: 180,
    width: 180,
    borderColor: '#D966BA',
    borderWidth: 6,
    borderRadius: 100,
    elevation: 5,
    marginBottom: 10
  },
  modalTextDetails: {
    color: '#D966BA',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    elevation: 5
  },
  modalTextDetailsInternal: {
    color: '#F2D64B',
  },
  modalCloseButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    backgroundColor: '#05F2AF',
    borderRadius: 4,
    marginTop: 20,
    marginBottom: 5,
    paddingHorizontal: 20,
    paddingVertical: 6
  },
  modalCloseButtonText: {
    color: '#0C1440',
    fontSize: 15,
    fontWeight: '500'
  },
});