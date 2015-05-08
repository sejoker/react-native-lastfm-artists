'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} = React;

var fetch = require('fetch');

var API_KEY='81bbfd4ecee91148e9f6df34090f5d7e';
var API_URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=ukraine&format=json';
var REQUEST_URL = API_URL + '&api_key=' + API_KEY;

var ArtistListScreen = React.createClass({
  getInitialState: function() {
      return {
      isLoading: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
  },
  
  componentDidMount: function() {
    this.loadArtists();
  },
  
  loadArtists: function() {
    this.setState({
      isLoading: true
    });

    fetch(REQUEST_URL)
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      })
      .then((responseData) => {
        console.log(responseData)
        this.setState({
          isLoading: false,
          dataSource: this.getDataSource(responseData.topartists.artist)
        })
      })
      .done();
  },

  getDataSource: function(artists: Array<any>): ListView.DataSource {
    return this.state.dataSource.cloneWithRows(artists);
  },

  renderRow: function(artist: Object) {
    return (
        <View>
          <Text>
            {artist.name}
          </Text>
        </View>
      );
  },

  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        automaticallyAdjustContentInsets={false}
        keyboardDismissMode="onDrag"
        keyboardShouldPersistTaps={true}
        showsVerticalScrollIndicator={false}
      />
    );
  }
});

module.exports = ArtistListScreen;