// Ice Task 2 (MAST5112)
import React, { useState } from 'react';
import {View,Text,TextInput,Button,StyleSheet,Alert,KeyboardAvoidingView,Platform,} from 'react-native';

const getRandomNumber = (): number => Math.floor(Math.random() * 100) + 1;

const App: React.FC = () => {
  const [target, setTarget] = useState<number>(getRandomNumber());
  const [input, setInput] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [tries, setTries] = useState<number>(0);

  const handleSubmit = () => {
    const guess = parseInt(input, 10);

    if (isNaN(guess)) {
      Alert.alert('Oops!', 'Please enter a valid number.');
      return;
    }

    setTries(prev => prev + 1);

    if (guess < target) {
      setMessage('Too low!');
    } else if (guess > target) {
      setMessage('Too high!');
    } else {
      setMessage('Nice! You got it');
    }

    setInput('');
  };

  const handleReset = () => {
    setTarget(getRandomNumber());
    setInput('');
    setMessage('');
    setTries(0);
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Mystery Number Challenge</Text>
      <Text style={styles.subtitle}>Guess a number between 1 and 100</Text>

      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={input}
        onChangeText={setInput}
        placeholder="Your guess"
      />

      <Button title="Submit" onPress={handleSubmit} />
      {message !== '' && <Text style={styles.feedback}>{message}</Text>}
      <Text style={styles.counter}>Tries: {tries}</Text>

      <Button title="Restart" onPress={handleReset} color="#FF6B6B" />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FDF6EC',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
    color: '#FF6B6B',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    marginBottom: 12,
    backgroundColor: '#FFF',
  },
  feedback: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    color: '#4ECDC4',
  },
  counter: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#888',
  },
});

export default App;