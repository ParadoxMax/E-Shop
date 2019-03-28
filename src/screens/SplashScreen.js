import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { Image, ActivityIndicator } from 'react-native';
import { images } from '../constants/images'

class SplashScreen extends Component {
    state = { }
    componentDidMount() {
        this.checkAuth()
    }

    // checkAuth = () => {
    //     setTimeout(() => {
    //         this.props.navigation.navigate('Auth');
    //     }, 2000);
    // };

    render() {
        return (
         <Box f={1} center>
             <Box mb= "sm">
                <Image source ={images.logo} />
             </Box>
             <Box mb="sm" >
                <Text size= "xl">E-
                    <Text color="orange" size="xl">Shop</Text>
                </Text>
             </Box>
             <Text size="sm">An easy way to shop Online!</Text>
             <ActivityIndicator size='sm'/>
         </Box>   
        );
    }
}

export default SplashScreen;