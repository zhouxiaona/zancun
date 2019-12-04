import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    NavigatorIOS
} from 'react-native';

import Read from "./Read";
class Navigator extends Component{
    render(){
        return <NavigatorIOS
            initialRoute={{
                component:Read,
                title:'Foo This',
                navigationBarHidden:true

            }}
            style={styles.mycontainer}
        >
        </NavigatorIOS>
    }
}
const styles=StyleSheet.create({
    mycontainer:{
        flex:1
    }
});
export default Navigator;