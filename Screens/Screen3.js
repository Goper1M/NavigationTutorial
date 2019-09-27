import React from 'react';
import { Text, View, StyleSheet } from 'react-native';



class Screen3 extends React.Component{
    constructor(props){
        super(props);
    }

    onBackToHome () {
        this.props.navigation.popToTop();
    }

    render() {
        return(
            <View style = { styles.container }>
                <Text onPress = { () => this.onBackToHome() }>
                    I'M ON THE THIRD SCREEN
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

  export default Screen3;