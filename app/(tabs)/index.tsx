import { useEffect, useState } from "react";
import { router, Stack } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import type { Product } from "@/types";

export default function HomeScreen() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const renderProductItem = ({ item }: { item: Product }) => {
    return (
      <Pressable
        onPress={() =>
          router.navigate({
            pathname: "/products/[id]",
            params: { id: item.id },
          })
        }
        key={item.id}
        style={styles.itemContainer}
      >
        <Image source={{ uri: item.images[0] }} style={styles.itemImage} />
        <View style={styles.itemContent}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemCategory}>{item.category.name}</Text>
          <Text style={styles.itemPrice}>${item.price}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={products} renderItem={renderProductItem} numColumns={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    maxWidth: 500,
    margin: "auto",
    padding: 10,
  },
  itemContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  itemImage: {
    height: 100,
    borderTopRightRadius: 10,
    borderTopStartRadius: 10,
  },
  itemContent: {
    width: 150,
    padding: 6,
    flex: 1,
    gap: 4,
    borderRadius: 8,
  },
  itemTitle: {
    marginTop: 2,
  },
  itemCategory: {
    fontSize: 12,
    color: "#99a1af",
  },
  itemPrice: {
    fontSize: 12,
  },
});
