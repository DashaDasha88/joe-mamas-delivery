import {View, Text, StyleSheet, FlatList} from 'react-native';

const BasketDishItem = ({basketDish}) => {
    return (
        <View style={styles.row}>
            <View style={styles.quantityContainer}>
                <Text>{basketDish.quantity}</Text>
            </View>
            <Text style={{fontWeight: "600"}}>{basketDish.Dish.name}</Text>
            <Text style={{marginLeft: "auto"}}>${basketDish.Dish.price}</Text>
        </View>
    )
}

export default BasketDishItem;

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
    },
    quantityContainer: {
        backgroundColor: "light grey",
        paddingHorizontal: 5,
        marginRight: 10,
        paddingVertical: 2,
        borderRadius: 3,
    }
});