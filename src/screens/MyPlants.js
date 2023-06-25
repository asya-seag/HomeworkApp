import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import { X_RapidAPI_Key, X_RapidAPI_Host } from '../../env.js';



export default function MyPlants({ navigation }) {
  const [searchValue, setSearchValue] = useState('');
  const [plantInfo, setPlantInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (value) => {
    setSearchValue(value);

    try {
      const response = await axios.get('https://plantwise.p.rapidapi.com/plant/', {
        params: { plant_type: searchValue },
        headers: {
          'X-RapidAPI-Key': X_RapidAPI_Key,
          'X-RapidAPI-Host': X_RapidAPI_Host
        }
      });
      const data = response.data;

      if (!data) {
        setError('No plant information found');
        setPlantInfo(null);
        return;
      }

      const plantData = {
        commonName: data.common_name,
        scientificName: data.scientific_name,
        watering: data.watering,
        propagation: data.propagation,
        hardiness: data.hardiness,
      };

      setPlantInfo(plantData);
    } catch (error) {
      console.error('Error fetching plant information:', error);
    }
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

      {/* Displaying plant info */}
      {plantInfo && (
        <View style={styles.plantInfoContainer}>
          <Text style={styles.plantName}>Common name:{plantInfo.common_Name}</Text>
          <Text style={styles.plantDescription}>Scientific name: {plantInfo.scientific_Name}</Text>
          <Text style={styles.plantDescription}>Watering: {plantInfo.watering}</Text>
          <Text style={styles.plantDescription}>Propagation: {plantInfo.propagation}</Text>
          <Text style={styles.plantDescription}>Hardiness: {plantInfo.hardiness}</Text>
        </View>
      )}
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
  plantInfoContainer: {
    marginTop: 80,
    alignItems: 'center',
  },
  plantName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  plantDescription: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
});
