
import React from 'react'
import {View, Text, Image, Button, StyleSheet, TouchableOpacity, TouchableHighlight, Dimensions, Touchable} from 'react-native'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as firebase from 'firebase'

export default class HomeScreen extends React.Component {
    state = {
        email: "",
        displayName: "",
        mapRegion: { latitude: 48.866667, longitude: 2.333333, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
        hasLocationPermissions: false,
        locationResult: null,
        restaurants: [] 
    }
    

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    

    signOutUser = () => {
        firebase.auth().signOut();
    };

}

    render() {
        return (
            <View style={styles.container}>
            
                <Text>Hi {this.state.email}!</Text>                    
              
                <TouchableOpacity style={{ marginTop: 10, marginBottom: 32 }} onPress={this.signOutUser}>
                    <Text style={{ color: "#fff", backgroundColor: 'red', paddingTop: 10, paddingBottom: 10, paddingLeft: 25, paddingRight: 25, borderRadius: 10, marginTop: 600, fontWeight: "500" }}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonContainer: {
        margin: 20
      },
      alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }
});