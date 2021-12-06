import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [radius, setRadius] = useState(0);
  const [height, setHeight] = useState(0);
  const [area, setVolume] = useState(0);

  function calcVolume(){
    let area = Math.pow(radius,2)*Math.PI;
    let result = area/3*height;
    setVolume(parseFloat(result).toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Térkúp</Text>
      <View style={styles.start}>
        <Text style={styles.inputTitle}>Sugár:</Text>
        <TextInput placeholder="Sugár" style={styles.input} onChangeText={ radius => setRadius(radius) } />
        <Text style={styles.inputTitle}>Magasság:</Text>
        <TextInput placeholder="Magasság" style={styles.input} onChangeText={ height => setHeight(height) } />
        <StatusBar style="auto" />
        <Button title="Számít" color="#3b5998"
        onPress={calcVolume}/>
      </View>
      <Text style={[styles.inputTitle,{fontSize: 40}]}>Térfogat: {area}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe3ee',
    alignItems: 'center',
  },
  start: {
    alignItems: 'flex-start',
    backgroundColor: 'gray',
    paddingHorizontal: 80,
    paddingBottom: 20,
    width: '100%',
  },
  input: {
    borderWidth: 5,
    borderColor: '#3b5998',
    width: '100%',
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: 'white',
    paddingStart: 10,
  },
  title: {
    fontFamily: "Cochin",
    color: "#3b5998",
    margin: 40,
    fontSize: 80,
    fontWeight: "bold"
  },
  inputTitle: {
    fontWeight: 'bold',
    color: 'darkred',
    marginTop: 20,
  }
});
