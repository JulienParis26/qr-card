
import React from 'react'
import {View, Text, Image, Button, StyleSheet, TouchableOpacity, TouchableHighlight, Dimensions, Touchable} from 'react-native'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as firebase from 'firebase'
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

export default class HomeScreen extends React.Component {
    state = {
        email: "",
        displayName: "",
        mapRegion: { latitude: 48.866667, longitude: 2.333333, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
        hasLocationPermissions: false,
        locationResult: null,
    }
    

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
        this.getLocationAsync();
        
    }

    signOutUser = () => {
        firebase.auth().signOut();
    };

    handleMapRegionChange = (mapRegion) => {
        this.setState({ mapRegion });
    };

    async getLocationAsync() {

        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === "granted") {
          this.setState({ hasLocationPermissions: true });
          const location = await Location.getCurrentPositionAsync({});
          this.setState({ locationResult: JSON.stringify(location) });

          this.setState({
            mapRegion: {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421,
            },
          });
        } else {
          alert("Location permission not granted");
        }
    }

    render() {
        return (
            <View style={styles.container}>
            
                <Text>Hi {this.state.email}!</Text>

                <View style={styles.container}>
                    <MapView 
                        style={styles.mapStyle}
                        region={this.state.mapRegion}
                        onRegionChange={this.handleMapRegionChange}
                        ><MapView.Marker coordinate={this.state.mapRegion}>
                        <View>
                          <Image source={require('../images/pin.png')} 
                          style={{
                        width: 50,
                        height: 50
                        }} />
                        </View>
                      </MapView.Marker>
                    </MapView>
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
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    mapStyle: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    },
});