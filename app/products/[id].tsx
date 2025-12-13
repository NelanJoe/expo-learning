import { useState, useEffect } from "react";
import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";

import { Product } from "@/types";

export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return (
      <View style={{ marginVertical: 20 }}>
        <Stack.Screen
          options={{
            title: "Product Detail",
          }}
        />
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Product Detail",
        }}
      />
      <Image
        source={{ uri: product?.images[0] }}
        alt={product?.title}
        style={styles.productImage}
      />
      <Text style={styles.productTitle}>{product?.title}</Text>
      <Text style={styles.productCategory}>{product?.category.name}</Text>
      <Text style={styles.productPrice}>${product?.price}</Text>
      <Text style={styles.productDescription}>{product?.description}</Text>
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
  productImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginVertical: 20,
  },
  productTitle: {
    fontSize: 18,
    marginVertical: 5,
  },
  productCategory: {
    color: "#99a1af",
    marginVertical: 5,
  },
  productPrice: {
    marginVertical: 5,
  },
  productDescription: {
    marginVertical: 5,
    textAlign: "justify",
    lineHeight: 20,
  },
});
