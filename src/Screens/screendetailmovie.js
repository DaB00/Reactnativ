import React, {useContext} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Button,
  
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Context as FavoriteContext} from '../context/favoriteContex';
import {useNavigation} from '@react-navigation/native';
import styles from './styles/Stylesscreenmoviedetail'
export default function Screenmoviedetail(props) {
  const data = props.route.params;
  const {state, addFavorite, removeFavorite} = useContext(FavoriteContext);
  const navigation = useNavigation();
  navigation.setOptions({
    title: '',
    headerRight: () => (
      <View>
        <Button
          title=" Back to Search"
          onPress={() => navigation.navigate('Search')}
        />
      </View>
    ),
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image
        style={styles.imgarBox}
        source={{
          uri: data.uri,
        }}
      />
      <View style={styles.viewBoxtext}>
        <Text style={styles.textTitle}>{data.original_title}</Text>
        <Text style={styles.textAverage}>
          Average vote :{data.vote_average}
        </Text>
        <Text style={styles.textOverview}>{data.overview}</Text>
      </View>
      <View style={{flex: 1}}>
        {state.find(element => element.id === data.id) == undefined ? (
          <TouchableOpacity
            onPress={() => addFavorite(data)}
            style={styles.buttonfavourite}>
            <Text style={styles.textFavorite}>Favourite</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => removeFavorite(data.id)}
            style={styles.buttonfavourite}>
            <Text style={styles.textFavorite}>UNFavourite</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}


