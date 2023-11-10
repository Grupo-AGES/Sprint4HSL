import React, { ReactNode } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface BackgroundProps {
  children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <View>
    <LinearGradient
      colors={['#005CA3', '#368AC3', '#77C1E9']}
      style={{ flex: 1 }}>
      {children}
    </LinearGradient>
    </View>
  );
}
