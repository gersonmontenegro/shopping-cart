import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ProductList from 'src/screens/list';

const routeNavigator = {
    List: {
        screen: ProductList
    },
};

const configNavigator = {
    transitionConfig: () => (
        {
            transitionSpec: {
                duration: 150,
            }
        }
    )
};

export default MainNavigator = createStackNavigator(routeNavigator, configNavigator);