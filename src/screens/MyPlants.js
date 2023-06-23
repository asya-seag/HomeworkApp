import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function MyPlants({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>My Plants</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('About')}>
        <Text style={styles.textStyle}>Go back!</Text>
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
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
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