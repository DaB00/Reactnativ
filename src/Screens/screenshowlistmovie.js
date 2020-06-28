import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import SCBmovieAPI from '../SCBmovieAPI';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Cardmovie from '../component/Cardmovie';
export default function Screenshowlist(props) {
  const textsearch = props.route.params.textsearch;
  const baseUri = 'https://image.tmdb.org/t/p/w92';
  const [movielist, setmovielist] = useState([]);
  const navigation = useNavigation();
  const [page, setPage] = useState(1);
  navigation.setOptions({
    title: '',
  });
  useEffect(() => {
    fetapi(textsearch, page);
  }, []);
  const fetapi = async (textsearch, page) => {
    try {
      const res = await SCBmovieAPI.get('/api/movies/search', {
        params: {query: `${textsearch}`, page: `${page}`},
      });

      setmovielist([...movielist, ...res.data.results]);

      setPage(page + 1);
    } catch (err) {
      console.log(err);
    }
  };
 

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={movielist}
        keyExtractor={item => item.id.toString()}
        onEndReached={() => fetapi(textsearch, page)}
        onEndReachedThreshold={0.1}
        renderItem={({item}) => (
          <Cardmovie
            uri={baseUri + item.poster_path}
            original_title={item.original_title}
            overview={item.overview}
            vote_average={item.vote_average}
            release_date={item.release_date}
            id={item.id}
          />
        )}
      />
    </SafeAreaView>
  );
}
