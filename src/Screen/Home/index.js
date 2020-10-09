import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  ImageBackground,
} from 'react-native';
import TextCustom from './props';

const image = {uri: 'https://wallpaperaccess.com/full/1288076.jpg'};

class Home extends React.Component {
  state = {
    data: [],
    input: '',
  };

  newdata = () => {
    const datanew = this.state.input;
    this.state.data.push(datanew);
    this.setState({
      data: this.state.data,
    });
  };
  deldata = (element) => {
    const delet = element;
    const datafilter = this.state.data.filter((value, key) => {
      return delet != key;
    });
    this.setState({data: datafilter});
  };
  render() {
    return (
      <View style={stylers.container}>
        <ImageBackground source={image} style={stylers.image}>
          <View style={stylers.Header}>
            <View style={{width: '85%', alignItems: 'center'}}>
              <TextCustom title="To Do List" />
            </View>
            <View
              style={{
                width: '15%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text onPress={() => this.props.navigation.replace('Login')}>
                Logout
              </Text>
            </View>
          </View>
          <ScrollView style={{flex: 1}}>
            {this.state.data.map((value, key) => {
              return (
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    backgroundColor: 'grey',
                    marginTop: 5,
                  }}
                  key={key}>
                  <View style={{width: '80%', height: 45}}>
                    <Text>{value}</Text>
                  </View>
                  <View
                    style={{
                      width: '20%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text onPress={() => this.deldata(key)}>hapus</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
          <View style={{backgroundColor: 'gray'}}>
            <TextInput
              placeholder="Masukkan data"
              value={this.state.input}
              onChangeText={(teks) => this.setState({input: teks})}
            />
            <Button title="Input" onPress={() => this.newdata()} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default Home;

const stylers = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  Header: {
    width: '100%',
    height: '7%',
    backgroundColor: '#0d54e3',
    flexDirection: 'row',
    borderRadius: 50,
  },
});
