import React from 'react';
import { View, StyleSheet } from 'react-native';
import ContactForm from './ContactForm';

const App = () => {
  return (
    <View style={styles.container}>
      <ContactForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
