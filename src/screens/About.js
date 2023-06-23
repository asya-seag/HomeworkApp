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
        <Image source={require('../../assets/images/gardener.png')} style={styles.icon}/>
      </View>
      <View style={styles.container}>
        <View style={styles.panel}>
          <Text style={styles.header}>I created this app because I'm a keen gardener and it is something I would find useful myself. I would like to expand its functionality so the user can search plants API,
          add plants to My Plants page, to have easy to find information about the plants they already have and Wish List is supposed
          to be like a notes page, where user could add names of plants maybe with short notes on what exactly they are.</Text>
         
        </View> 
          <Text style={styles.textStyle}>My Plants</Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('My Plants')}>
          <Text style={styles.textStyle}>Go to My Plants!</Text>
        </TouchableOpacity>
          <Text style={styles.textStyle}>Wish List</Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Wish List')}>
          <Text style={styles.textStyle}>Go to Wish List!</Text>
        </TouchableOpacity>
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
  contentContainer: {
    margin: 20,
    backgroundColor: '#FFFFFF', 
    borderRadius: 10, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  },
  buttonStyle: {
    backgroundColor: '#577D86',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  panel: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
});