import React, { PureComponent } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/Ionicons';
import { fixedNumber } from 'src/providers/helpers';
import { productStyles } from 'src/assets/styles';

const theme = getTheme();

class Product extends PureComponent {
    constructor(props) {
        super(props);
        this.createButton = this.createButton.bind(this);
        this.createNameAndPrice = this.createNameAndPrice.bind(this);
    }

    createButton = (icon) => {
        return (
            <TouchableWithoutFeedback
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
            <View style={{ flexDirection: 'column', alignItems: 'flex-start', flex: 1 }}>
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
            <View style={[theme.cardStyle, { marginTop: 5, padding: 10 }]}>
                <View style={{ flexDirection: 'row', backgroundColor: '#c5c5c5', flex: 1 }}>
                    <Icon
                        name={'ios-checkmark-circle-outline'}
                        size={30}
                        style={productStyles.icon}
                    />
                    {
                        this.createNameAndPrice()
                    }
                    {
                        this.createButton('ios-remove-circle')
                    }
                    {
                        this.createButton('ios-add-circle')
                    }
                </View>
            </View>
        );
    }
}

export default Product;
