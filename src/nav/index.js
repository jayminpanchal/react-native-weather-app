import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import CountryDetailsScreen from '../screens/CountryDetails';
import Routes from './routes';

const Stack = createStackNavigator();

export function NavigatorContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={Routes.HOME} component={HomeScreen}/>
                <Stack.Screen name={Routes.COUNTRY_DETAILS} component={CountryDetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
