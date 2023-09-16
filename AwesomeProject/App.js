import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState();

  useEffect(() => {
    const getPermission = async () => {
      let { status } = await Location.requestForegroundPermissionAsync();
      if (status !== 'granted') {
        console.log("please give me your location");
        return;
      } else {
        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
        console.log("found location")
      }
    }
  
    getPermission();
  }, []);

  let [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./assets/Poppins-Bold.ttf'),
    'Poppins-Light': require('./assets/Poppins-Light.ttf'),
  });
  
  if (!fontsLoaded) {
      return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.whiteContainer}>
        <Text style={{ fontFamily: 'Poppins-Bold', fontSize:'50px' }}>Life 180</Text>
        <Text style={{ fontFamily: 'Poppins-Bold', fontSize:'18px'}}>Turn your life around</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00D1FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  whiteContainer: {
    width: '80%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});