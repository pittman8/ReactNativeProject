import React from 'react';
import { StyleSheet, View } from 'react-native';
import GetFile from './GetFile';
import Address from './Address';
import Header from './Header';
import { NativeRouter, Route } from 'react-router-native';

export default class App extends React.Component {
    render() {
        return (
            <NativeRouter>
                <View style={styles.addressContainer}>
                    return (
                    <View style={styles.addressContainer}>
                        <Header />
                        <Route exact path="/" component={Address} />
                        <Route path="/get-file" component={GetFile} />
                    </View>
                    );
                </View>
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
