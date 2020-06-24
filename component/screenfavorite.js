import React, { useContext} from 'react'
import { SafeAreaView, Text ,FlatList,TouchableOpacity,View,Image} from 'react-native'
import {Context as FavoriteContext} from '../context/favoriteContex'
import {useNavigation} from '@react-navigation/native'
export default function Screenfavorite(){
    const {state} = useContext(FavoriteContext)
    const navigation = useNavigation()
    console.log(state)
    return(
        <SafeAreaView>
            <FlatList
        data={state}
        renderItem={({item}) => (
          <TouchableOpacity
          onPress={() =>
            navigation.navigate('Detail', {
              uri: `${item.uri}`,
              original_title: item.original_title,
              overview: item.overview,
              vote_average: item.vote_average,
              release_date: item.release_date,
              id:item.id
            })
          }
            >
            <View style={{flexDirection: 'row', marginTop: '2%',flex:1}}>
              <View style={{flex: 3.5,alignItems:'center'}}>
                <Image
                  style={{width:'70%',height:'100%'}}
                  source={{
                    uri: `${item.uri}`,
                  }}
                />
              </View>

              <View style={{flex: 7, paddingLeft: '1%', height: 125}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  {item.original_title}
                </Text>
                <Text style={{color: '#bfbdbd'}}> {item.release_date} </Text>
                <Text numberOfLines={4}>{item.overview}</Text>
              </View>

              </View>
              
            
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
        </SafeAreaView>
    )
}