import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Badge } from 'react-native-elements';
import { withNavigation } from 'react-navigation'

const CartIcon = (props) => (
    <View style={{ padding: 5, flexDirection: 'row' }}>
        <Badge value={88} textStyle={{ color: 'white' }} containerStyle={{ backgroundColor: '#8FBC8B' }} />
        <Icon name='ios-cart' size={20} />
    </View>
)


const mapStateToProps = (state) => {
    const { cartReducers } = state
    return { cartReducers }
}

export default connect(mapStateToProps)(withNavigation(CartIcon));
