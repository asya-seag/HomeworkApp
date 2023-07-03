import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import { Image } from 'react-native-elements';

export default function Welcome({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/images/Plant_app_background.png')}
      style={styles.backgroundImage}
      imageStyle={styles.backgroundImageStyle}
    >
      <View style={styles.iconContainer}>
        <Image source={require('../../assets/images/gardener.png')} style={styles.icon} />
      </View>
      <View style={styles.container}>
        <View style={styles.panel}>
          <Text style={styles.header}>I created this app because I'm a keen gardener and it is something I would find useful myself. I tried to expand its functionality as much as I could within short framework of CFG Masters Mobile App development course. </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  icon: {
    width: 60,
    height: 60,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  backgroundImageStyle: {
    flex: 1,
    opacity: 0.4,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
});
