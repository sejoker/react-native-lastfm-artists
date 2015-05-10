'use strict';

var React = require('react-native');
var ArtistListScreen = require('./ArtistListScreen');

var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet
} = React;

var LastFmArtists = React.createClass({
  render: function() {
    return (
     <NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: "Last.fm Top Artists",
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
