import React, { Component } from 'react';
import {Animated, AppRegistry, StyleSheet, Text,  TouchableOpacity,
         View, StackNavigator, Navigator, Button, ScrollView,
} from 'react-native';

export default class Body extends Component{
    render(){
        return(
            <View style = {{flex : 1}}>
                <Text>
                    Animation
                </Text>
            </View>
        );
    }
}