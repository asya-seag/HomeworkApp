import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function WishList({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Wish List</Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.textStyle}>Go to home page!</Text>
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
    backgroundColor: '#FEE440',
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