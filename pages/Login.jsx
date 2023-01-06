import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/logo-light-transparent.png')}
          resizeMode="contain"
        />
        {/* <Text style={styles.title}>Invoice App</Text> */}
        <Text style={styles.subtitle}>by MSO</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Our invoice app makes it easy to create, send, and track invoices on the go. 
        </Text>
      </View>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008037',
    width: '100%'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  // title: {
  //   fontSize: 28,
  //   fontWeight: 'bold',
  //   color: 'white',
  //   marginTop: 10,
  // },
  subtitle: {
    fontSize: 18,
    color: 'white',
  },
  descriptionContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 20,
    padding: 15,
  },
  signUpButton: {
    backgroundColor: 'white',
    color: 'black',
    padding: 15,
    width: '80%',
    borderRadius: 5,
  },
  signUpButtonText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  loginButton: {
    marginTop: 15,
    backgroundColor: 'white',
    color: 'black',
    padding: 15,
    width: '80%',
    borderRadius: 5,
  },
  loginButtonText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
});

export default Login;
