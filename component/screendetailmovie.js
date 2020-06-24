import React, { useContext } from 'react';
import {SafeAreaView, Text, View, Image, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Context as FavoriteContext} from '../context/favoriteContex'
import {useNavigation} from '@react-navigation/native'
export default function Screenmoviedetail(props) {
  const data = props.route.params;
  const {state,addFavorite,removeFavorite} = useContext(FavoriteContext)
  const navigation = useNavigation()
  navigation.setOptions({
    title:"",
    headerRight:()=>(
      <View>
        <Button title=' Back to Search'
        onPress={()=>navigation.navigate('Search')} />

      </View>
    )
  })
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Image
          style={{
            backgroundColor: 'lightgray',
            flex: 1,
            width: '45%',
            height: '100%',
            alignSelf: 'center',
          }}
          source={{
            uri: data.uri,
          }}
        />
        <View style={{flex: 2,marginTop:'2%'}}>
          <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:'2%'}} >{data.original_title}</Text>
          <Text style={{fontSize: 20,paddingLeft:'2%'}}>Average vote :{data.vote_average}</Text>
          <Text style={{fontSize:16,paddingLeft:'3%',paddingTop:'1%'}}>{data.overview}</Text>
          {state.find(element=>element.id===data.id)==undefined? <TouchableOpacity
          onPress={()=>addFavorite(data)}
            style={{
              backgroundColor: '#ffa700',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '65%',
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>Favourite</Text>
          </TouchableOpacity>: <TouchableOpacity
          onPress={()=>removeFavorite(data.id)}
            style={{
              backgroundColor: '#ffa700',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '65%',
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>UNFavourite</Text>
          </TouchableOpacity>}
         
        </View>
      </View>
    </SafeAreaView>
  );
}
