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
            placeholder="Enter the plant name.."
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
    position: 'relative', 
  },
  searchContainer: {
    position: 'absolute', 
    top: 5, 
    width: '100%', 
    alignItems: 'center', 
    marginTop: 20,
    marginBottom: 10,
  },
  searchBarContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#577D86',
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '90%', 
  },
  searchInput: {
    paddingVertical: 8,
  },
});
