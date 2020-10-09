import React from 'react';
import {View, Text, ActivityIndicator, ImageBackground} from 'react-native';

class Splash extends React.Component {
  render() {
    setTimeout(() => {
      this.props.navigation.replace('Login');
    }, 5000);
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"rgb(118, 219, 210)"}}>
        <Text style={{fontSize: 50}}>Link Start</Text>
        <ActivityIndicator size="large" color="#130c55" />
      </View>
    );
  }
}

export default Splash;
