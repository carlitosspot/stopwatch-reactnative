var React = require('react-native');
var {
    Text,
    View,
    AppRegistry,
    StyleSheet
    } = React;

var StopWatch = React.createClass({
    render: function(){
        return <View>
            <View>
                <View>
                    <Text>
                        00:00.00
                    </Text>
                </View>
                <View>
                    {this.startStopButton()}
                    {this.lapButton()}
                </View>
            </View>

            <View>
                <Text>
                    I am list of laps
                </Text>
            </View>
        </View>
    },
    startStopButton: function(){
        return  <View>
            <Text>
                Start
            </Text>
        </View>
    },
    lapButton: function(){
        return    <View>
            <Text>
                Lapt
            </Text>
        </View>
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
    }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);