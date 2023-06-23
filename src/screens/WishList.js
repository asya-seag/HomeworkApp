import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import React, { useState } from 'react';



export default function WishList({ navigation }) {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addNote = () => {
    setNotes([...notes, inputValue]);
    setInputValue('');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/Plant_app_background.png')}
      style={styles.backgroundImage}
      imageStyle={styles.backgroundImageStyle}
    >
      <View style={styles.container}>
        <Text style={styles.textStyle}>Wish List</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a plant to your wish list"
            value={inputValue}
            onChangeText={setInputValue}
          />
          <TouchableOpacity style={styles.addButton} onPress={addNote}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.notesContainer}>
          {notes.map((note, index) => (
            <View key={index} style={styles.noteContainer}>
              <Text style={styles.noteText}>{note}</Text>
            </View>
          ))}
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
