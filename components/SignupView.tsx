import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const SignupView = ({ onBack }: { onBack: () => void }) => {
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.headerShape} />
      <Text style={styles.title}>Create Account</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#9C9C9C" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#9C9C9C"
          autoFocus = {true}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#9C9C9C" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#9C9C9C"
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
          textContentType='password'
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#9C9C9C" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#9C9C9C"
          secureTextEntry
        />
      </View>

      {/* Signup Button */}
      <TouchableOpacity style={styles.button}>
              <LinearGradient
                colors={['#FAC856', '#FDA13B']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradientButton}
              >
                <Text style={styles.buttonText}>SIGN UP</Text>
                <Ionicons name="arrow-forward-outline" size={20} color="white" />
              </LinearGradient>
            </TouchableOpacity>

      {/* Sign In Link */}
      <TouchableOpacity onPress={onBack} style={styles.signupContainer}>
        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.signInLink}>Sign in</Text>
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
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
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
    marginBottom: 30,
    marginTop: 80,
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
  signInText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 12,
    color: "#6B6B6B",
  },
  signupContainer: {
    position: "absolute", // Anchor it to the bottom
    bottom: 30, // Distance from the bottom edge
    alignSelf: "center", // Center it horizontally
  },
  signInLink: {
    color: "#F5A623",
    fontWeight: "bold",
  },
});

export default SignupView;
