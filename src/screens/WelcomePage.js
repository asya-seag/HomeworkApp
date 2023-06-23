import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import { ImageBackground } from 'react-native';
import { Image } from 'react-native-elements';

export default function HomePage({ navigation }) {
  return (
    <ImageBackground source={require('../../assets/images/Plant_app_background.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image source={require('../../assets/images/gardener.png')} style={styles.icon} />
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.title}>Welcome to My Garden app!</Text>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('About')}>
            <Text style={styles.buttonText}>Tap to Open the About page</Text>
          </TouchableOpacity>
        </View>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black'
  },
  buttonWrapper: {
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonStyle: {
    width: 250,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#577D86',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
