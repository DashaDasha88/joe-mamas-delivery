import { StyleSheet, FlatList, View } from 'react-native';
import RestaurantItem from '../../components/RestauranItem';
import { useEffect, useState } from 'react';
import { Restaurant } from '../../models';
import { DataStore } from "aws-amplify";

export default function HomeScreen() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    DataStore.query(Restaurant).then(setRestaurants);
  }, []);

  return (
      <View style={styles.page}>
          <FlatList data={restaurants} renderItem={({ item }) => <RestaurantItem restaurant={item}/>} showsVerticalScrollIndicator={false} />
      </View>

  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  }
});
