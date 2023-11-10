
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/components/HomePage';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
    
    <HomePage/>
     
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#3949AB', 

  },
});
