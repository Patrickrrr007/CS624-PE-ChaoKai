import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import Card from './component/Card.js';

const data = [
  { id: '1', title: 'Card 1' },
  { id: '2', title: 'Card 2' },
  { id: '3', title: 'Card 3' },
  { id: '4', title: 'Card 4' },
  { id: '5', title: 'Card 5' },
  { id: '6', title: 'Card 6' }
];

const numColumns = 2;
const size = Dimensions.get('window').width / numColumns;


export default class App extends Component<{}>{
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Card item={item}/>
          )}
          keyExtractor={(item) => item.id}
          numColumns={numColumns} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // paddingBottom: 100
  }
});
