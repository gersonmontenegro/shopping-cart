import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';

const theme = getTheme();

const styles = StyleSheet.create({
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
});


class Product extends PureComponent {
    constructor(props) {
        super(props);
        this.createButton = this.createButton.bind(this);
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

    render() {
        return (
            <View style={[theme.cardStyle, { marginTop: 5, padding: 10 }]}>
                <View style={{ flexDirection: 'row', backgroundColor: '#c5c5c5', flex: 1 }}>
                    <Icon
                        name={'ios-checkmark-circle-outline'}
                        size={30}
                        style={styles.icon}
                    />
                    <View style={{ flexDirection: 'column', alignItems: 'flex-start', flex: 1 }}>
                        <Text style={styles.title}>
                            {this.props.detail.name}
                        </Text>
                        <Text style={styles.price}>
                            Price: ${this.props.detail.price}
                        </Text>
                    </View>
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
