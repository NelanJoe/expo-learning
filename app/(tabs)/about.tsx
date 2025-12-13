import { Image, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.aboutContainer}>
        <View>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
            }}
            alt="Avatar"
            style={styles.avatar}
          />
          <Text style={styles.aboutText}>John Doe</Text>
          <Text style={styles.aboutDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste et
            recusandae, nisi at optio doloremque?
          </Text>
        </View>
        <View style={styles.socialsContainer}>
          <Text style={styles.socialLink}>Instagram</Text>
          <Text style={styles.socialLink}>Github</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  aboutContainer: {
    width: 300,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f9fafb",
  },
  avatar: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: "100%",
  },
  aboutText: {
    marginVertical: 8,
  },
  aboutDescription: {
    fontSize: 12,
    color: "#94a3b8",
    wordWrap: "pretty",
  },
  socialsContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 3,
    marginVertical: 10,
  },
  socialLink: {
    fontSize: 10,
  },
});
