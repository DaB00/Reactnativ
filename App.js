import React from 'react';

import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import  { createStackNavigator } from '@react-navigation/stack';
import Screenserch from './component/screenserch'
import Screendetailmovie from './component/screendetailmovie'
import Screenfavorite from './component/screenfavorite'
import Screenshowlistmovie from './component/screenshowlistmovie'
import {Provide as BlogcProvider} from './context/moviecontext'
import {Provide as FavoriteProvider} from './context/favoriteContex'




const Stack = createStackNavigator()

const App = () => {
  return (
    <BlogcProvider>
      <FavoriteProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="IndexScreen">
        <Stack.Screen name="Search" component={Screenserch} />
        <Stack.Screen name="Detail" component={Screendetailmovie} />
        <Stack.Screen name="Favorite" component={Screenfavorite} />
        <Stack.Screen name="Listmovie" component={Screenshowlistmovie}/>
      </Stack.Navigator>
    </NavigationContainer>
    </FavoriteProvider>
    </BlogcProvider>
    
  );
};

export default App;
