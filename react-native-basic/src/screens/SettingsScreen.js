import { Text, View, Button, SafeAreaView } from "react-native";

export default function SettingsScreen(props) {
  const { navigation } = props;

  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Settings</Text>
        <Text>Settings</Text>
        <Text>Settings</Text>
        <Text>Settings</Text>
        <Text>Settings</Text>
        <Text>Settings</Text>
        <Text>Settings</Text>
        <Button onPress={() => goToPage("Home")} title="Ir a Home" />
      </View>
    </SafeAreaView>
  );
}
