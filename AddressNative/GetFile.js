import React, { Component } from 'react';
import styles from './elf-styles';
import  { Text, View, Button } from 'react-native';

class GetFile extends Component {
    constructor() {
        super();
        this.state = {
            file: 'unknown'
        };
    }

    render() {
        return (
            <View className="GetFile">
                <Text>File: {this.state.file}</Text>
                <View style={styles.buttonView} >
                    <Button
                        onPress={this.getFile}
                        title="Get Data"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        );
    }

    getFile = () => {
        this.setState({
            file: 'url-file.js'
        });
    };
}
export default GetFile;
