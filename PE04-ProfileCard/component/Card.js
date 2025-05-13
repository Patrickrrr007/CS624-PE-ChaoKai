import { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const size = Dimensions.get('window').width / 2.5;
export default Card = (props) => {

    const [isScaledUp, setIsScaledUp] = useState(false)
    toggleScale = () => {
        isScaledUp ? setIsScaledUp(false) : setIsScaledUp(true)
    };

    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleScale}>
            <View style={[styles.cardContainer, { transform: [{ scale: isScaledUp ? 0.8 : 0.25 }] }]}>
                <View style={styles.cardImageContainer}>
                    <Image style={styles.cardImage}
                        source={require('../assets/icons8-user-50.png')} />
                </View>
                <View>
                    <Text style={styles.cardName}>
                        John Doe
                    </Text>
                </View>
                <View style={styles.cardOccupationContainer}>
                    <Text style={styles.cardOccupation}>
                        React Native Developer
                    </Text>
                </View>
                <View>
                    <Text style={styles.cardDescription}>
                        John is a really great JavaScript developer. He
                        loves using JS to build React Native applications
                        for iOS and Android.
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 0
    },
    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        margin: 0,
        backgroundColor: 'dodgerblue',
        width: size + 50, // Adjust the card width based on the margin
        height: size + 280, // Adjust the card height based on the margin
        shadowColor: '#000000',
        shadowRadius: 100,
        shadowOpacity: 1,
        shadowOffset : {
            width: 45,
            height: 45
        }
    },
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowRadius: 100,
        shadowOpacity: 1,
        shadowOffset : {
            width: 45,
            height: 45
        }
    },
    cardImage: {
        width: 80,
        height: 80
    },
    cardName: {
        color: 'white',
        marginTop: 30,
        textShadowColor: 'black',
        textShadowOffset: {
            height: 5,
            width: 5
        },
        textShadowRadius: 5
    },
    cardOccupationContainer: {
        borderColor: 'black',
        borderBottomWidth: 3
    },
    cardOccupation: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    cardDescription: {
        fontStyle: 'italic',
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10
    }
});
