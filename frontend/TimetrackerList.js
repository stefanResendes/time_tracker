import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'

export default class TimetrackerList extends Component {
    state = {
        data: []
    }

    totalTime = 0;

    componentDidMount() {
        this.refreshTask();
    }

    refreshTask = () => {
        this.totalTime = 0;
        fetch('http://localhost:3000/timetracker', {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            this.setState({
                data: json
            })
        });
    }
    
    deleteTask = (id) => {
        console.log(id);
        fetch('http://localhost:3000/timetracker/delete/'+id, {
            method: 'DELETE'
        });
        this.refreshTask();
    }

    addTotalTime = (start, end) => {
        this.totalTime += (end - start);
    }

    getTime = (time) => {
        switch(time) {
            case '8':
                return '8:00 AM';
            case '9':
                return '9:00 AM';
            case '10':
                return '10:00 AM';
            case '11':
                return '11:00 AM';
            case '12':
                return '12:00 PM';
            case '13':
                return '1:00 PM';
            case '14':
                return '2:00 PM';
            case '15':
                return '3:00 PM';
            case '16':
                return '4:00 PM';
            case '17':
                return '5:00 PM';
            case '18':
                return '6:00 PM';
            case '19':
                return '7:00 PM';
            case '20':
                return '8:00 PM';
        }   
    }



    render() {
        return (
            <div>
            <View style={styles.navigationRow}>
                <TouchableOpacity style={styles.submitButton} onPress={() => this.props.navigation.navigate('AddTimetracker')}><Text>Add Task</Text></TouchableOpacity>
                <TouchableOpacity style={styles.submitButton} onPress={() => this.props.navigation.navigate('About')}><Text>About</Text></TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                    () => this.refreshTask()
                }>
                <Text style = {styles.submitButtonText}> Refresh </Text>
                </TouchableOpacity>
                {
                    this.state.data.map((item, index) => (
                        <div>
                            <Text>
                                {item.timetracker_task}: {this.getTime(item.timetracker_starttime)} - {this.getTime(item.timetracker_endtime)}
                                {this.addTotalTime(item.timetracker_starttime.toString(), item.timetracker_endtime.toString())}

                                <TouchableOpacity
                                    style = {styles.submitButton}
                                    onPress = {
                                        () => { 
                                            this.props.navigation.navigate('UpdateTimetracker', {id: item._id, task: item.timetracker_task, start: item.timetracker_starttime, end: item.timetracker_endtime});
                                        }
                                    }>
                                    <Text style = {styles.submitButtonText}> Update </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style = {styles.submitButton}
                                    onPress = {
                                        () => { 
                                            this.deleteTask(item._id);
                                        }
                                    }>
                                    <Text style = {styles.submitButtonText}> Delete </Text>
                                </TouchableOpacity>
                            </Text>
                        </div>
                    ))
                }
                <Text>
                    Total Time Spent: {this.totalTime} hours
                </Text>
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