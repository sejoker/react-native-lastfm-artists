'use strict';

var React = require('react-native');
var fetch = require('fetch');
var WebView = require('WebView');

var {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var API_KEY='81bbfd4ecee91148e9f6df34090f5d7e';
var API_URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=ukraine&format=json';
var REQUEST_URL = API_URL + '&api_key=' + API_KEY;

class ArtistListScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
  }
  
  componentDidMount() {
    this.loadArtists();
  }
  
  loadArtists() {
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
  }

  getDataSource(artists: Array<any>): ListView.DataSource {
    return this.state.dataSource.cloneWithRows(artists);
  }

  openPage(url) {
    this.props.navigator.push({
      title: 'Web View',
      component: WebView,
      passProps: {url}
    });
  }

  renderRow(artist: Object) {
    return (
        <View>
          <TouchableHighlight
            onPress={this.openPage.bind(this, artist.url)}
            underlayColor='transparent'>
            <Text>{artist.name}</Text>
          </TouchableHighlight>
        </View>
      );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        automaticallyAdjustContentInsets={false}
        keyboardDismissMode="onDrag"
        keyboardShouldPersistTaps={true}
        showsVerticalScrollIndicator={false}
      />
    );
  }
};

module.exports = ArtistListScreen;