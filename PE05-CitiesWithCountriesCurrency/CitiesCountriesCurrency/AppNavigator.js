import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import Cities from './Cities/Cities'
import AddCity from './AddCity/AddCity'
import AddCountry from './AddCountry/AddCountry';
import Countries from './Countries/Countries';
const Tab = createBottomTabNavigator();

export default class App extends Component {
  state = {
    cities: [],
    countries: []
  }

  addCity = (city) => {
    const cities = this.state.cities
    cities.push(city)
    this.setState({ cities })
  }

  addCountries = (country) => {
    const countries = this.state.countries
    countries.push(country)
    this.setState({ country })    
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Cities"  initialParams={{cities: this.state.cities, addCity: this.addCity}} component={Cities} />
          <Tab.Screen name="AddCity" initialParams={{addCity: this.addCity}} component={AddCity} />
          <Tab.Screen name="Countries" initialParams={{countries: this.state.countries, addCountry: this.addCountries}} component={Countries} />
          <Tab.Screen name="AddCountry" initialParams={{addCountry: this.addCountries}} component={AddCountry} />

        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}