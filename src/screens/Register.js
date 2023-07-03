import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Register } from '../store/actions';

export default function RegisterScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const onRegister = () => {
        if (username && password && email) {
            //mocking registration element for now 
            setError('Registration successful');
        } else {
            setError('Please fill in all the fields');
        }
    };


    const handleLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <ImageBackground
            source={require('../../assets/images/Plant_app_background.png')}
            style={styles.backgroundImage}
            imageStyle={styles.backgroundImageStyle}
        >
            <View style={styles.container}>
                <Text style={styles.textStyle}>Register</Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>


                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </View>


                <TouchableOpacity style={styles.addButton} onPress={onRegister}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                {error ? <Text style={styles.noteText}>{error}</Text> : null}

                <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.loginLink}>Already have an account? Login here</Text>
                </TouchableOpacity>
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
        marginTop: 20,
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
    loginLink: {
        marginTop: 10,
        color: '#577D86',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});