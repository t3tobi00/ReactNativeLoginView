import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const LoginView = ({ onSignupPress }: { onSignupPress: () => void }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerShape} />
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Please sign in to continue.</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#9C9C9C" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#9C9C9C"
          autoFocus = {true}
          keyboardType='email-address'
          textContentType='emailAddress'
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#9C9C9C" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#9C9C9C"
          secureTextEntry
        />
        {/* Forgot Password */}
        <TouchableOpacity onPress={() => console.log('Forgot Password Pressed')}>
          <Text style={styles.forgotText}>FORGOT</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button}>
        <LinearGradient
          colors={['#FAC856', '#FDA13B']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
          <Ionicons name="arrow-forward-outline" size={20} color="white" />
        </LinearGradient>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <TouchableOpacity onPress={onSignupPress} style={styles.signupContainer}>
        <Text style={styles.signupText}>
          Don’t have an account? <Text style={styles.signupLink}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    justifyContent: "center",
  },
  headerShape: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 120,
    height: 120,
    backgroundColor: "#FFD582",
    borderBottomLeftRadius: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    marginTop: 80,
  },
  subtitle: {
    fontSize: 14,
    color: "#6B6B6B",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
  forgotText: {
    fontSize: 12,
    color: "#F5A623",
    fontWeight: "bold",
  },
  // #FAC856 #FDA13B
  button: {
    marginTop: 20, // Add margin to position the button
    borderRadius: 8, // Ensure rounded corners
    overflow: 'hidden', // Prevent gradient overflow
  },
  gradientButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    width: "50%",
    alignSelf: "flex-end",
    borderRadius: 50,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  signupContainer: {
    position: "absolute", // Anchor it to the bottom
    bottom: 30, // Distance from the bottom edge
    alignSelf: "center", // Center it horizontally
  },
  signupText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 12,
    color: "#6B6B6B",
  },
  signupLink: {
    color: "#F5A623",
    fontWeight: "bold",
  },
});

export default LoginView;
