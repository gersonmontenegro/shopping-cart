import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/Ionicons';

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
                    <TouchableWithoutFeedback
                        style={{
                            alignSelf: "flex-end",
                            right: 10,
                        }}
                    >
                        <Icon
                            name="ios-remove-circle"
                            size={40}
                        />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        style={{
                            alignSelf: "flex-end",
                            right: 10,
                        }}
                    >
                        <Icon
                            name="ios-add-circle"
                            size={40}
                        />
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

export default Product;
