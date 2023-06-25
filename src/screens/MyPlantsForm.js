import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';

export default function WishList({ navigation }) {
  const [plants, setPlants] = useState([]);
  const [plantName, setPlantName] = useState('');
  const [location, setLocation] = useState('');
  const [watering, setWatering] = useState('');
  const [propagation, setPropagation] = useState('');
  const [hardiness, setHardiness] = useState('');

  const addPlant = () => {
    const newPlant = {
      plantName,
      location,
      watering,
      propagation,
      hardiness
    };
    setPlants([...plants, newPlant]);
    setPlantName('');
    setLocation('');
    setWatering('');
    setPropagation('');
    setHardiness('');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/Plant_app_background.png')}
      style={styles.backgroundImage}
      imageStyle={styles.backgroundImageStyle}
    >
     <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.textStyle}>My Plants List</Text>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Wish List</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Plant Name"
            value={plantName}
            onChangeText={setPlantName}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Location in the Garden"
            value={location}
            onChangeText={setLocation}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Watering"
            value={watering}
            onChangeText={setWatering}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Propagation"
            value={propagation}
            onChangeText={setPropagation}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Hardiness"
            value={hardiness}
            onChangeText={setHardiness}
          />
        </View>

        <TouchableOpacity style={styles.addButton} onPress={addPlant}>
          <Text style={styles.buttonText}>Add to My Plants</Text>
        </TouchableOpacity>

        <View style={styles.noteContainer}>
          {plants.map((plant, index) => (
            <View key={index} style={styles.noteContainer}>
              <Text style={styles.plantText}>Plant Name: {plant.plantName}</Text>
              <Text style={styles.plantText}>Location: {plant.location}</Text>
              <Text style={styles.plantText}>Watering: {plant.watering}</Text>
              <Text style={styles.plantText}>Propagation: {plant.propagation}</Text>
              <Text style={styles.plantText}>Hardiness: {plant.hardiness}</Text>
            </View>
          ))}
        </View>
      </View>
      </ScrollView>
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
    textStyle: {
      fontSize: 22,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
      marginBottom: 10,
      marginTop:25,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 15,
    },
    input: {
      flex: 1,
      borderWidth: 2,
      borderColor: '#CCCCCC',
      borderRadius: 5,
      padding: 8,
      marginRight: 10,
      marginLeft: 10,
    },
    addButton: {
      backgroundColor: '#577D86',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    noteText: {
      marginVertical: 5,
      fontSize: 16,
      fontWeight: 'normal',
      color: 'black',
    },
    buttonStyle: {
      backgroundColor: '#577D86',
      paddingVertical: 7,
      paddingHorizontal: 20,
      borderRadius: 5,
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
      margin: 10,
    },
    noteContainer: {
      backgroundColor: '#FFFFFF',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
  });