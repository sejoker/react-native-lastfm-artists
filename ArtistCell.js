'use strict';

var React = require('react-native');
var Separator = require('./Separator');

var {
  Image,
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} = React;

class ArtistCell extends React.Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={this.props.onOpenPage}
          underlayColor='transparent'>
            <View style={styles.container}>
              <Image 
                source={{uri: this.props.artist.image[2]["#text"]}}
                style={styles.artistImage}
              />
              <View style={styles.rightContainer}>
                <Text style={styles.rank}># {this.props.artist["@attr"].rank}</Text>
                <Text style={styles.name}>{this.props.artist.name}</Text>
              </View>
            </View>
        </TouchableHighlight>
        <Separator/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  artistImage: {
    height: 84,
    width: 126,
    marginRight: 10
  },
  rightContainer: {
    flex: 1
  },
  name: {
    textAlign: 'center',
    fontSize: 14,
    color: '#999999'
  },
  rank: {
    textAlign: 'center',
    marginBottom: 2,
    fontWeight: '500',
    fontSize: 16
  }
})

module.exports = ArtistCell;