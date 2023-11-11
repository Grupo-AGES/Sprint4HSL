import React, { ReactNode } from 'react'
import LinearGradient from 'react-native-web-linear-gradient' //botei pra web para testar por web, mas o correto é 'react-native-linear-gradient' para app

interface BackgroundProps {
  children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <LinearGradient
      colors={["#005CA3", "#368AC3", "#77C1E9"]}
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  )
}


