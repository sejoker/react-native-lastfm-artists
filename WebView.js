var React = require('react-native');

var {
  View,
  WebView,
  StyleSheet
} = React;

class Web extends React.Component {
  render() {
    return (
      <View>
        <WebView url={this.props.url}/>
      </View>
    );
  }
}

Web.propTypes = {
  url: React.PropTypes.string.isRequired
};

module.exports = Web;