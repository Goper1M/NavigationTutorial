import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Screen2 from './Screens/Screen2';
import Screen3 from './Screens/Screen3';


class HomeScreen extends React.Component{
  constructor(props){
    super(props);
  }

  next () {

    var tempArrya = [1,2,3,4];
    this.props.navigation.push('SecondScreen', {
      james: 'hello',
      todos: tempArrya
    });
    
  }

  render() {
    return(
      <View style = { styles.container } >
        <Text onPress = {() => this.next()}>
          I'M ON THE FIRST SCREEN CLICK TO GO NEXT
          </Text>
      </View>
    );
  }
}

const appNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    SecondScreen: Screen2,
    ThirdScreen: Screen3
  },
  {
    initialRouteName: 'Home',

  }
);

export default createAppContainer(appNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

});