import React from 'react';
import {View, Text, Image, Button, StyleSheet, TouchableOpacity, TouchableHighlight, Dimensions, Touchable} from 'react-native'
import * as firebase from 'firebase'
import Animated from 'react-native-reanimated';


export default class DashboardScreen extends React.Component {
  
    
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
    }


    render() {

        return (
          
            <View style={styles.container}>

                <Text style={styles.greeting}> Hello { this.state.displayName }.</Text>

                <View style={styles.container}>

                
                </View>

                <View style={styles.menu} > 
                
                <Text style={{ marginLeft: 25, marginRight: 25, marginTop: 5}} onPress={() => this.props.navigation.navigate("Profile")}> 
                <Image source={require('../images/profile.png')} style={ styles.logoMenuSmall } />
                </Text>

                <Text onPress={() => this.props.navigation.navigate("Card")}> 
                <Image source={require('../images/add-card.png')} style={ styles.logoMenu } />
                </Text>

                <Text style={{ marginLeft: 25, marginRight: 25, marginTop: 5}} onPress={() => this.props.navigation.navigate("QRCode")}> 
                <Image source={require('../images/qrcode.png')} style={ styles.logoMenuSmall } />
                </Text>


                </View>


            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#305049",
      alignItems: "center",
      justifyContent: "center",
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
        color: '#ffffff'
    },
    menu: {
        flexDirection: "row-reverse",
        width: 250,
        height: 72,
        borderRadius: 30,
        marginBottom: 50,
        backgroundColor: '#ffffff',
        alignItems: "center",
        justifyContent: "center",
    },
    logoMenu: {
        width: 80,
        height: 80,
    },
    logoMenuSmall: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
    }
});