import { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, Text } from 'react-native';
import { myColors } from './android/app/src/styles/Colors';
import { ThemeContext } from './android/app/src/context/ThemeContext';
import MyKeyboard from './android/app/src/components/MyKeyboard';



function App() {
  const [theme, setTheme] = useState('light');
  return (
    // ThemeContext - value={theme} set as global
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
        <Switch 
          value={theme == 'dark'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <Text>To Dark</Text>
        {/* <Text>To Light</Text> */}

        
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;
