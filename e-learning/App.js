import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import LoginScreen from './App/Screen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigations from './App/Navigations/TabNavigations';
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-SemiBold.ttf'),
  });
  return (
    <ClerkProvider publishableKey={"pk_test_ZmFjdHVhbC1tYWxhbXV0ZS01OC5jbGVyay5hY2NvdW50cy5kZXYk"}>
      <View style={styles.container}>
        
        <SignedIn>
          <NavigationContainer>
            <TabNavigations/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen/>
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:20
  },
});
