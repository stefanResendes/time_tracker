import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button, Picker } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export default class AddTimetracker extends Component {
    state = {
        taskName: '',
        startTime: '',
        endTime: '',
        data: []
    }

    handleTaskName = (text) => {
        this.setState({ taskName: text })
    }
    
    enterTime = (name, start, end) => {
        var dataPost = {
            timetracker_task: name,
            timetracker_starttime: start,
            timetracker_endtime: end
        }
        console.log(JSON.stringify(dataPost));
        fetch('http://localhost:3000/timetracker/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataPost)
        });
    }

    render() {
        return (
            <div>
            <View style={styles.navigationRow}>
                <TouchableOpacity style={styles.submitButton} onPress={() => this.props.navigation.navigate('TimetrackerList')}><Text>Tracker List</Text></TouchableOpacity>
                <TouchableOpacity style={styles.submitButton} onPress={() => this.props.navigation.navigate('About')}><Text>About</Text></TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TextInput style = {styles.input}
                    placeholder = "Task Name"
                    onChangeText = {this.handleTaskName}/>
                <Picker 
                    style={styles.input}
                    selectedValue={this.state.startTime}
                    onValueChange={(itemValue, itemIndex) => ( this.setState({ startTime: itemValue }) ) } 
                >
                    <Picker.Item label = "Select Start Time" value = "" />
                    <Picker.Item label = "8:00 AM" value = "8" />
                    <Picker.Item label = "9:00 AM" value = "9" />
                    <Picker.Item label = "10:00 AM" value = "10" />
                    <Picker.Item label = "11:00 AM" value = "11" />
                    <Picker.Item label = "12:00 PM" value = "12" />
                    <Picker.Item label = "1:00 PM" value = "13" />
                    <Picker.Item label = "2:00 PM" value = "14" />
                    <Picker.Item label = "3:00 PM" value = "15" />
                    <Picker.Item label = "4:00 PM" value = "16" />
                    <Picker.Item label = "5:00 PM" value = "17" />
                    <Picker.Item label = "6:00 PM" value = "18" />
                    <Picker.Item label = "7:00 PM" value = "19" />
                    <Picker.Item label = "8:00 PM" value = "20" />
                </Picker>
                <Picker 
                    style={styles.input}
                    selectedValue={this.state.endTime}
                    onValueChange={(itemValue, itemIndex) => ( this.setState({ endTime: itemValue }) ) } 
                >
                    <Picker.Item label = "Select End Time" value = "" />
                    <Picker.Item label = "8:00 AM" value = "8" />
                    <Picker.Item label = "9:00 AM" value = "9" />
                    <Picker.Item label = "10:00 AM" value = "10" />
                    <Picker.Item label = "11:00 AM" value = "11" />
                    <Picker.Item label = "12:00 PM" value = "12" />
                    <Picker.Item label = "1:00 PM" value = "13" />
                    <Picker.Item label = "2:00 PM" value = "14" />
                    <Picker.Item label = "3:00 PM" value = "15" />
                    <Picker.Item label = "4:00 PM" value = "16" />
                    <Picker.Item label = "5:00 PM" value = "17" />
                    <Picker.Item label = "6:00 PM" value = "18" />
                    <Picker.Item label = "7:00 PM" value = "19" />
                    <Picker.Item label = "8:00 PM" value = "20" />
                </Picker>
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                        () => this.enterTime(this.state.taskName, this.state.startTime, this.state.endTime)
                    }>
                    <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
      margin: 15,
      height: 40,
      borderWidth: 2
    },
    submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
    },
    submitButtonText: {
      color: 'white'
    },
    navigationRow: {
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center'
    }
  });