import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { WebView } from 'react-native-webview';

export default function News({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/images/Plant_app_background.png')}
      style={styles.backgroundImage}
      imageStyle={styles.backgroundImageStyle}
    >
      <View style={styles.webViewContainer}>
        <WebView source={{ uri: 'https://www.gardenersworld.com/plants/what-to-plant-june/' }} />
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
  webViewContainer: {
    flex: 1,
    width: '100%',
  },  
});


/*import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, Linking, TouchableOpacity} from 'react-native';
import axios from 'axios';

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNewsData();
  }, []);

  const fetchNewsData = async () => {
    try {
      const response = await axios.get('http://api.mediastack.com/v1/news', {
        params: {
          access_key: '5e8e00e8b24ca6ae84d57d1620c87624',
          keywords: 'gardening tips.
          ',
          countries: 'us,gb',
        },
      });

      const { data } = response.data;
      setNewsData(data);
    } catch (error) {
      console.error('Error fetching news:', error);
      setError('Error fetching news');
    }
  };

  const openArticle = (url) => {
    Linking.openURL(url);
  };

  const renderItem = ({ item }) => (
    <View style={styles.newsItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.link} onPress={() => openArticle(item.url)}>
        Read Article
      </Text>
    </View>
  );


  const refreshNews = () => {
    fetchNewsData();
  };
  
  return (
    <ImageBackground
      source={require('../../assets/images/Plant_app_background.png')}
      style={styles.backgroundImage}
      imageStyle={styles.backgroundImageStyle}
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.addButton} onPress={refreshNews}>
          <Text style={styles.buttonText}>Refresh</Text>
        </TouchableOpacity>
      </View>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={newsData}
          keyExtractor={item => item.title}
          renderItem={renderItem}
        />
      )}
    </ImageBackground>
  );
  
}; 

export default NewsPage; 


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
  newsItem: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  link: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
  errorText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'red',
    marginTop: 50,
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
});  */


