import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import { Text } from 'react-native-elements';

class ProductList extends PureComponent {
    static navigationOptions = {
        headerTitle: 'Shopping cart!!',
    }

    constructor(props) {
        super(props);
    }

    onKeyExtractor = (item, index) => index.toString();

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', backgroundColor: 'gray' }}>
                <Text>I'm the list!!!</Text>
            </View>
        );
    }
}

export default ProductList;
