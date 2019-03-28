import React from 'react';
import { UtilityThemeProvider, Box, Text } from 'react-native-design-utility';
import { ActivityIndicator } from 'react-native'
import Navigation from './source/screens';
import { images } from './src/constants/images';
import { cacheImages } from './src/utils/cacheImages' 


export default class App extends React.Component {
 state = {
   isReady: false
 };
 componentDidMount() {
   this.cacheAsset()
 }

 cacheAsset = async() => {
   const imagesAssets = cacheImages(Object.values(images))

   await Promise.all([...imagesAssets])

   this.setState({ isReady = true})
 }

  render() {
    if (!this.state.isReady) {
      return (
        <Box f={1} center bg="white">
          <ActivityIndicator size='large'/>
        </Box>
      )
    }
    return (
      <UtilityThemeProvider>
        <Navigation/>
      </UtilityThemeProvider>

    );
  }
}
