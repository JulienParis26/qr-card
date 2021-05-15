
import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Touchable} from 'react-native'
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

                <TouchableOpacity style={{ marginBottom: 32 }} onPress={this.signOutUser}>
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