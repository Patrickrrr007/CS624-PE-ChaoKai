import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import CenterMessage from '../components/CentreMessage'
import { colors } from '../theme'

export default class Countries extends React.Component {
  static navigationOptions = {
    title: 'Countries',
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400'
    }
  }
  navigate = (item) => {
    this.props.navigation.navigate('Countries', { Countries: item })
  }
  render() {
    const {  countries  } = this.props.route.params;
    return (
      <ScrollView  contentContainerStyle={[!countries.length && { flex: 1 }]}>
        <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
          {
            !countries.length && <CenterMessage message='No saved Countries!' />
          }
          {
            countries.map((item, index) => (
              <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={index} >
                <View style={styles.countryContainer}>
                  <Text style={styles.countries}>{item.country}</Text>
                  <Text style={styles.currency}>{item.currency}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))
          }
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  },
  countries: {
    fontSize: 20,
  },
  currency: {
    color: 'rgba(0, 0, 0, .5)'
  },  
})