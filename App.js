import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Picker,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';


export default function App() {
  const [weight, setWeight] = useState(0);
  const [weightError, setWeightError] = useState('');
  const [bodyFat, setBodyFat] = useState(0);
  const [bodyFatError, setBodyFatError] = useState('');
  const [timeGoal, setTimeGoal] = useState(0);
  const [timeGoalError, setTimeGoalError] = useState('');
  const handleWeightChange = (newWeight) => {
    if (/^[0-9]*$/.test(newWeight)) {
      const numericValue = parseInt(newWeight, 10);
      if (numericValue >= 30 && numericValue <= 200) {
        setNumber(newWeight);
        setError('');
      } else {
        setNumber(0);
        setError('Ensure that the number is correct');
      }
    } else {
      setNumber(0);
      setError('Enter your weight in kg');
    }
  };
  const handleBodyFatChange = (newBodyFat) => {
    setBodyFat(newBodyFat);
  }
  const handleTimeGoalChange = (newTimeGoal) => {
    setTimeGoal(newTimeGoal);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Body Fat Calculator</Text>
      <Picker
        style={styles.picker}
        selectedValue={weight}
        onValueChange={(itemValue) => setWeight(itemValue)}
      >
        {Array.from({ length: 171 }, (_, i) => i + 30).map((number) => (
          <Picker.Item key={number} label={number.toString()} value={number} />
        ))}
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Weight"
        onChangeText={handleWeightChange}
        value={weight}
      />
      <TextInput
        style={styles.input}
        placeholder="Body Fat %"
        onChangeText={handleBodyFatChange}
        value={bodyFat}
      />
      <TextInput
        style={styles.input}
        placeholder="Time goal"
        onChangeText={handleTimeGoalChange}
        value={timeGoal}
      />
      <Text>Result</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10,
  },
  picker: {
    height: 50,
    width: 150,
  },
});
