import React, { PureComponent } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/Ionicons';
import { fixedNumber } from 'src/providers/helpers';
import { productStyles } from 'src/assets/styles';
import { connect } from 'react-redux';

const theme = getTheme();

class Product extends PureComponent {
    constructor(props) {
        super(props);
        this.createButton = this.createButton.bind(this);
        this.createNameAndPrice = this.createNameAndPrice.bind(this);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onClickRemove = this.onClickRemove.bind(this);
    }

    onClickAdd = () => {
        this.props.onAddProduct(this.props.detail);
    }

    onClickRemove = () => {
        this.props.onRemoveProduct(this.props.detail);
    }

    createButton = (icon, event) => {
        return (
            <TouchableWithoutFeedback
                onPress={event}
                style={{
                    alignSelf: "flex-end",
                    right: 10,
                }}
            >
                <Icon
                    name={icon}
                    size={40}
                />
            </TouchableWithoutFeedback>
        );
    }

    createNameAndPrice = () => {
        return (
            <View style={productStyles.nameAndPriceContainer}>
                <Text style={productStyles.title}>
                    {this.props.detail.name}
                </Text>
                <Text style={productStyles.price}>
                    Price: ${fixedNumber(this.props.detail.price)}
                </Text>
            </View>
        );
    }

    render() {
        return (
            <View style={[theme.cardStyle, productStyles.mainContainer]}>
                <View style={productStyles.productContainer}>
                    <Icon
                        name={'ios-checkmark-circle-outline'}
                        size={30}
                        style={productStyles.icon}
                    />
                    {
                        this.createNameAndPrice()
                    }
                    {
                        this.createButton('ios-remove-circle', this.onClickRemove)
                    }
                    {
                        this.createButton('ios-add-circle', this.onClickAdd)
                    }
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { productsReducers, cartReducers } = state
    return { productsReducers, cartReducers }
}

export default connect(mapStateToProps)(Product);
