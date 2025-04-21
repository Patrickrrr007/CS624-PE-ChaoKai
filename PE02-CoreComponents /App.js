import { StatusBar } from 'expo-status-bar';
import { ScrollView, Image, StyleSheet, Text, View, TextInput, SectionList } from 'react-native';

const courses = [
  {
    title: 'CORE REQUIREMENT (24 Credits)',
    data: [
      'CS 504: Software Engineering',
      'CS 506: Programming for Computing',
      'CS 519: Cloud Computing Overview',
      'CS 533: Computer Architecture',
      'CS 547: Secure Systems and Programs',
      'CS 622: Discrete Math and Algorithms for Computing',
      'DS 510: Artificial Intelligence for Data Science',
      'DS 620: Machine Learning & Deep Learning'
    ],
  },
  {
    title: 'DEPTH OF STUDY (6 Credits)',
    data: ['CS 624: Full-Stack Development - Mobile App', 'CS628: Full-Stack Development - Web App'],
  },
  {
    title: 'CAPSTONE (3 Credits)',
    data: ['CS 687: Computer Science Capstone']
  }
];

export default function App() {
  return (
    <ScrollView style={styles.container}>
        <Image style={styles.image} source={require('./assets/icon.png')}/>
        <Text>Which course would you like to study?</Text>
        <TextInput style={styles.textInput} defaultValue='ex. CS 624'/>
        <SectionList 
        sections = {courses}
        keyExtractor={(item, index) => item + index}
        
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>)}
        
        />
        <StatusBar style="auto" />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'flex-start',
  },
  image:{
    width: 150,
    height: 150,
    marginTop: 10
  },
  textInput:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 350,
    marginLeft: 10
  },
  header:{
    backgroundColor: '#FFFF00',
    fontSize: 25,
    paddingBottom: 35,
    marginBottom: 10,
    marginTop: 25,
    fontWeight: 'bold'
  }
});


