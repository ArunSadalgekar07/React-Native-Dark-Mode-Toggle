import react from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Button
} from "react-native"

function App() {
  const [name,setName] = react.useState("");
  return (
    <SafeAreaView>
      <View>
        <Text>This is Arun's First App!!!!!!!!</Text>
        <TextInput 
        placeholder='Enter your name'
        value={name}
        onChangeText={setName}
        />
      </View>
    </SafeAreaView>
  )
}


export default App;