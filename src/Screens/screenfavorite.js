import React, {useContext} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import {Context as FavoriteContext} from '../context/favoriteContex';
import Cardmovie from '../component/Cardmovie';
export default function Screenfavorite() {
  const {state} = useContext(FavoriteContext);

  return (
    <SafeAreaView>
      <FlatList
        data={state}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Cardmovie
            uri={item.uri}
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
