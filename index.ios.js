var React = require('react-native');
var formatTime = require('minutes-seconds-milliseconds');
var {
    Text,
    View,
    TouchableHighlight,
    AppRegistry,
    StyleSheet
    } = React;

var StopWatch = React.createClass({
    getInitialState: function(){
        return{
            timeElapsed: null
        }
    },
    render: function(){
        return <View style={styles.container}>
            <View style={[styles.header, this.border('yellow')]}>
                <View style={[styles.timerWrapper, this.border('red')]}>
                    <Text>
                        {formatTime(this.state.timeElapsed)}
                    </Text>
                </View>

                <View style={[styles.buttonWrapper, this.border('green')]}>
                    {this.startStopButton()}
                    {this.lapButton()}
                </View>
            </View>

            <View style={[styles.footer, this.border('blue')]}>
                <Text>
                    I am list of laps
                </Text>
            </View>
        </View>
    },
    startStopButton: function(){
        //return (<View><Text>Start</Text></View>);
        return <TouchableHighlight
            underlayColor="gray"
            onPress={this.handleStartPress}
        >
                <Text>
                    Start
                </Text>
        </TouchableHighlight>;
    },
    lapButton: function(){
        return <View>
            <Text>
                Lap
            </Text>
        </View>
    },
    border: function(color){
        return {
            borderColor: color,
            borderWidth: 4,
        }
    },
    handleStartPress: function(){
        var startTime = new Date();

        // update state
        setInterval(() => {
            this.setState({
                timeElapsed: new Date() - startTime
            });
        }, 30);

    }
});


var styles = StyleSheet.create({
    container: {
        flex: 1, // fill the entire screen
        alignItems: 'stretch'
    },
    header:{ //yellow
        flex: 1
    },
    footer:{ // blue
        flex: 1
    },
    timerWrapper:{ // red
        flex: 5, // takes upt 5/8 of space
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonWrapper:{ // gree
        flex: 3, // takes up 3/8 of space
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);

