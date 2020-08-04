import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class TimetrackerList extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.submitButton} onPress={() => this.props.navigation.navigate('AddTimetracker')}><Text>Add Task</Text></TouchableOpacity>
                <TouchableOpacity style={styles.submitButton} onPress={() => this.props.navigation.navigate('TimetrackerList')}><Text>Task List</Text></TouchableOpacity>
                <Text>Work Hours Tracker</Text>
                <Text>Created By: Stefan Resendes</Text>
                <Text>The Objective of this app is to assist in tracking the hours worked on a days worth of tasks for time reporting purposes.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    navigationRow: {
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
    },
    submitButtonText: {
      color: 'white'
    }
  });