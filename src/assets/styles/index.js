import { StyleSheet } from 'react-native';

export const productStyles = StyleSheet.create({
    title: {
        left: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    price: {
        left: 10,
    },
    icon: {
        color: 'black',
        backgroundColor: 'rgba(255,255,255,0)',
        left: 5
    },
    mainContainer: {
        marginTop: 5,
        padding: 10
    },
    productContainer: {
        flexDirection: 'row',
        backgroundColor: '#c5c5c5',
        flex: 1
    },
    nameAndPriceContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: 1
    }
});