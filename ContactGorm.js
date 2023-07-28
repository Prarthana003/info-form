import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Mailer from 'react-native-mail';
import validator from 'react-native-validator-form';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!validator.isEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (!validator.isMobilePhone(mobile, 'any', true)) {
      alert('Please enter a valid mobile number');
      return;
    }

    // Data validation successful, send email
    Mailer.mail(
      {
        subject: 'Contact Us Form Submission',
        recipients: ['info@redpositive.in'],
        body: `Name: ${name}\nMobile Number: ${mobile}\nEmail: ${email}\nMessage: ${message}`,
      },
      (error, event) => {
        if (error) {
          alert('Could not send the email. Please try again later.');
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        onChangeText={setName}
        value={name}
        style={styles.input}
      />
      <TextInput
        placeholder="Mobile Number"
        onChangeText={setMobile}
        value={mobile}
        style={styles.input}
        keyboardType="phone-pad"
      />
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Message"
        onChangeText={setMessage}
        value={message}
        style={styles.input}
        multiline
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: '#fff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 10,
      marginBottom: 10,
    },
    messageInput: {
      height: 100, // Increase the height for the message input
    },
  });
  
  export default ContactForm;