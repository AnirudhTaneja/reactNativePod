import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image,TextInput } from 'react-native';


class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
} 

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: 'type here'};
  }

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    let pic = {uri: 'https://pbs.twimg.com/profile_images/467340605920522240/T94NGjCg_400x400.jpeg'};
    return (
      <View style={styles.container}>
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
      <Text>Hello AT!</Text>
      <Image source={pic} style={{flex:1, alignSelf:`stretch`}}/>
        <Greeting name='Eat all the Pizza made for you' />
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
});
