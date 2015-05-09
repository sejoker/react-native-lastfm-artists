'use strict';

var React = require('react-native');

var {
  View,
  StyleSheet
} = React;

class Separator extends React.Component {
  render() {
    return (
      <View style={styles.separator}/>
    );
  }
}

var styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#E3E3E3',
    flex: 1
  }
})

module.exports = Separator;