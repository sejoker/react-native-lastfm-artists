/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet
} = React;

var ArtistListScreen = require('./ArtistListScreen');

var LastFmArtists = React.createClass({
  render: function() {
    return (
     <NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: "LastFM Top Artists",
        component: ArtistListScreen
      }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('LastFmArtists', () => LastFmArtists);