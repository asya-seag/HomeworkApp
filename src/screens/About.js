import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Mobile App +Masters</Text>
      <Text style={styles.textStyle}>My Plants</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('MyPlants')}>
        <Text style={styles.textStyle}>Go to My Plants!</Text>
      </TouchableOpacity>
      <Text style={styles.textStyle}>Wish List</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('WishList')}>
        <Text style={styles.textStyle}>Go to Wish List!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#009473',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle: {
    backgroundColor: '#F62D14',
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