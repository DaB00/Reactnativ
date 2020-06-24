import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import SCBmovieAPI from '../SCBmovieAPI';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
export default function Screenshowlist(props) {
  const textsearch = props.route.params.textsearch;
  

  const baseUri = 'https://image.tmdb.org/t/p/w92';
  const [movielist, setmovielist] = useState([]);
  const navigation = useNavigation();
  const [page,setPage] =useState(1)
    navigation.setOptions({
    title:""
  })
  useEffect(() => {
    fetapi(textsearch,page);
  }, []);
  const fetapi = async( textsearch,page) => {
    try{
      const res = await SCBmovieAPI.get('/api/movies/search', {
      params: {query: `${textsearch}`, page: `${page}`},
    });
    
    setmovielist([...movielist,...res.data.results]);
    
    setPage(page+1)
    }catch(err){console.log(err)}
    
  };
  // console.log(movielist)

  return (
    <SafeAreaView style={{flex:1}}>
      <FlatList
        data={movielist}

        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail', {
                uri: `${baseUri}${item.poster_path}`,
                original_title: item.original_title,
                overview: item.overview,
                vote_average: item.vote_average,
                release_date: item.release_date,
                id:item.id
              })
            }>
            <View style={{flexDirection: 'row', marginTop: '2%',flex:1}}>
              <View style={{flex: 3.5,alignItems:'center'}}>
                <Image
                  style={{width:'70%',height:'100%',backgroundColor:'lightgray'}}
                  source={{
                    uri: `${baseUri}${item.poster_path}`,
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
        onEndReached={()=>fetapi(textsearch,page)}
        onEndReachedThreshold ={0.1}
      />
    </SafeAreaView>
  );
}
