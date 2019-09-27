import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class Screen2 extends React.Component{
    constructor(){
        super();
    }


    render() {
        return(
            <View style = { styles.container }>
                <Text>
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