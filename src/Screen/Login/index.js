import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ImageBackground,
} from 'react-native';
import Tekscustom from './props';

const image = {uri: 'https://wallpaperaccess.com/full/1288076.jpg'};

class Login extends React.Component {
  state = {
    visibel: true,
    username: '',
    password: '',
    usernamenew: 'a',
    passwordnew: '1',
  };
  lihat = () => {
    this.setState({visibel: !this.state.visibel});
  };
  masuk = () => {
    if (
      this.state.username == this.state.usernamenew &&
      this.state.password == this.state.passwordnew
    ) {
      this.props.navigation.replace('Home');
    } else {
      alert('try again');
    }
  };

  render() {
    return (
      <View style={Stylers.container}>
        <ImageBackground source={image} style={Stylers.image}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 30, color: '#5d4df5'}}>Welcome</Text>
          </View>
          <View style={Stylers.Header}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Tekscustom title="Login" />
            </View>
            <View style={Stylers.boxinput}>
              <TextInput
                placeholder="Username"
                value={this.state.username}
                onChangeText={(teks) => this.setState({username: teks})}
              />
              <View style={{width: '100%', flexDirection: 'row'}}>
                <View style={{width: '80%'}}>
                  <TextInput
                    placeholder="Password"
                    secureTextEntry={this.state.visibel}
                    value={this.state.password}
                    onChangeText={(teks) => this.setState({password: teks})}
                  />
                </View>
                <View
                  style={{
                    width: '20%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text onPress={() => this.lihat()}>Lihat</Text>
                </View>
              </View>
            </View>
            <View style={Stylers.button}>
              <Button
                color="black"
                title="Login"
                onPress={() => this.masuk()}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default Login;

const Stylers = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#3064df',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  Header: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxinput: {
    width: '90%',
    backgroundColor: '#30dfcd7a',
    borderRadius: 25,
    marginVertical: 20,
    marginHorizontal: '5%',
  },
  button: {
    // backgroundColor:"yellow",
    justifyContent: 'center',
    alignItems: 'center',
  },
});
