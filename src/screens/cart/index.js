import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

class Cart extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
                <Text>Cart list goes here!</Text>
            </View>
        );
    }
}

export default Cart;
