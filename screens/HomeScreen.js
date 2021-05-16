
import React from 'react'
import {View, Text, Image, Button, StyleSheet, TouchableOpacity, TouchableHighlight, Dimensions, Touchable} from 'react-native'
import MapView from 'react-native-maps';
import * as firebase from 'firebase'

export default class HomeScreen extends React.Component {
    state = {
        email: "",
        displayName: ""
    }

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    };

    render() {
        return (
            <View style={styles.container}>
            
                <Text>Hi {this.state.email}!</Text>

                <View style={styles.container}>
                    <MapView style={styles.map} />
                </View>
                <TouchableHighlight
                    style = {{
                        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                        width: Dimensions.get('window').width * 0.2,
                        height: Dimensions.get('window').width * 0.2,
                        backgroundColor:'#000',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} onPress={() => this.props.navigation.navigate("Scan")}>

                    <Image source={require('../images/scan.png')} 
                    style={{
                        width: 50,
                        height: 50
                    }}/>
                </TouchableHighlight>
                <TouchableOpacity style={{ marginTop: 10, marginBottom: 32 }} onPress={this.signOutUser}>
                    <Text style={{ color: "#232323", fontWeight: "500" }}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})