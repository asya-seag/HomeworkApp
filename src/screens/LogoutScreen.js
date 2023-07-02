import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { Logout } from '../store/actions';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LogoutScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(Logout());
    };

    return (
        <ImageBackground source={require('../../assets/images/Plant_app_background.png')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Image source={require('../../assets/images/gardener.png')} style={styles.icon} />
                </View>

                <View style={styles.panel}>
                    <Text style={styles.header}>To Log out of your account press the button below:</Text>
                </View>

                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.addButton} onPress={handleLogout}>
                        <Ionicons name="exit-outline" size={24} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    icon: {
        width: 60,
        height: 60,
    },
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
    panel: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
        margin: 10,
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    buttonWrapper: {
        backgroundColor: '#577D86',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    addButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LogoutScreen;
