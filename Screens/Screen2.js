import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import Screen3 from './Screens/Screen3';


class Screen2 extends React.Component{
    constructor(props){
        super(props);

        var name = this.props.navigation.getParam('james', 'Gay');

        var todos = this.props.navigation.getParam('todos', 'temp');

        console.log(todos)
        console.log(name);
    }

    onNextPress () {
        this.props.navigation.push('ThirdScreen');
    }

    render() {
        return(
            <View style = { styles.container }>
                <Text onPress = { () => this.onNextPress() }>
                    I'M ON THE SECOND SCREEN
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
  });

  export default Screen2;