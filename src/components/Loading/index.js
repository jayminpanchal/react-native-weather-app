import React from 'react';

import {ActivityIndicator, View, StyleSheet} from 'react-native';

const Loading = () => {
    return (
        <View style={Styles.container}>
            <ActivityIndicator/>
        </View>
    );
};

export default Loading;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
