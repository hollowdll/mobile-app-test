import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  Image,
} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState("");
  
  const buttonPressed = () => {
    console.log("Button pressed");
  }
  
  const showAlert = () => {
    Alert.alert("Yo!");
  }

  const showTextState = () => {
    Alert.alert(text);
  }
  
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <Button onPress={buttonPressed} title="Click this" />
      <Button onPress={showAlert} title="Show alert" />
      <TextInput
        style={styles.input}
        onChangeText={text => setText(text)}
        value={text}
      />
      <Button onPress={showTextState} title="Show text" />
      <Image
        style={styles.image}
        source={{uri: "https://docs.expo.dev/static/images/tutorial/01-app-running-on-all-platforms.jpg"}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: 'orange',
  },
  image: {
    width: 250,
    height: 150,
  }
});
