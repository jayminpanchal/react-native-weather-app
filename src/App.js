import 'react-native-gesture-handler';
import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
} from 'react-native';
import {Provider} from 'react-redux';

import Home from './screens/Home';
import {configureStore} from './redux/store';
import {NavigatorContainer} from './nav';

const {store} = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView style={styles.container}>
                    <NavigatorContainer/>
                </SafeAreaView>
            </>
        </Provider>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});
