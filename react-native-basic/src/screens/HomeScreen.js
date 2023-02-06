import { View, Text, Button, SafeAreaView } from "react-native";

export default function HomeScreen(props) {
    const { navigation } = props;
    
  const goToSettings = () => {
    navigation.navigate('Settings')
  }
  return (
    <SafeAreaView>
    <View>
      <Text>HOLA en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Button onPress={goToSettings} title='Ir a Ajustes' />
    </View>
  </SafeAreaView>
  );
}
