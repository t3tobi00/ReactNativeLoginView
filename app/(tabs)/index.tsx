import React, { useState } from 'react';
import { View } from 'react-native';

import SignupView from '@/components/SignupView';
import LoginView from '@/components/LoginView';

export default function HomeScreen() {
  const [showSignup, setShowSignup] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      {showSignup ? (
        <SignupView onBack={() => setShowSignup(false)} />
      ) : (
        <LoginView onSignupPress={() => setShowSignup(true)} />
      )}
    </View>
  );
}
