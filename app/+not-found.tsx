import { router, Stack } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "NotFound",
        }}
      />
      <Text style={styles.errorText}>NotFoundScreen</Text>
      <TouchableOpacity
        onPress={() => router.navigate("/")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    padding: 10,
    width: 100,
    borderRadius: 5,
    backgroundColor: "#334155",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
