import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { mapDispatchToProps } from 'src/actions';
import Product from 'src/screens/list/Product';

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
                <FlatList
                    keyExtractor={this.onKeyExtractor}
                    data={this.props.productsReducers}
                    renderItem={(data) =>
                        <Product
                            detail={data.item}
                        />}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { productsReducers, cartReducers } = state
    return { productsReducers, cartReducers }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(ProductList));
