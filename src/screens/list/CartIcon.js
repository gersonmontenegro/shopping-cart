import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Badge } from 'react-native-elements';

const CartIcon = (props) => (
    <View style={{ padding: 5, flexDirection: 'row' }}>
        <Badge value={88} textStyle={{ color: 'white' }} containerStyle={{ backgroundColor: '#8FBC8B' }} />
        <Icon name='ios-cart' size={20} />
    </View>
)


export default CartIcon;
