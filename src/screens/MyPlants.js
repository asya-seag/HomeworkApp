import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';


export default function MyPlants({ navigation }) {
  return (
    <ImageBackground
    source={require('../../assets/images/Plant_app_background.png')}
    style={styles.backgroundImage}
    imageStyle={styles.backgroundImageStyle}
    >
      <View style={styles.container}>
        <Text style={styles.textStyle}>My Plants</Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('About')}>
          <Text style={styles.textStyle}>Go back!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 24,
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
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'black',
  },
});