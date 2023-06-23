import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import { SearchBar } from '@rneui/themed';
import React, { useState } from 'react';


export default function MyPlants({ navigation }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
    // Search logic to be added later
  };

  return (
    <ImageBackground
    source={require('../../assets/images/Plant_app_background.png')}
    style={styles.backgroundImage}
    imageStyle={styles.backgroundImageStyle}
    >

      <View style={styles.searchContainer}>
          <SearchBar
            platform="default"
            placeholder="Type query here..."
            onChangeText={handleSearch}
            value={searchValue}
            inputStyle={styles.searchInput}
            containerStyle={styles.searchBarContainer}
          />
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', // Add position: 'relative' to the container
  },
  searchContainer: {
    position: 'absolute', // Use absolute positioning for the search container
    top: 0, // Position it at the top
    width: '100%', // Take up the full width
    alignItems: 'center', // Center the search bar horizontally
    marginTop: 20,
    marginBottom: 10,
  },
  searchBarContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '90%', // Adjust the width as needed
  },
  searchInput: {
    paddingVertical: 8,
  },
});
