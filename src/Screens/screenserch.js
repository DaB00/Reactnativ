import React, {useContext, useState} from 'react';
import {SafeAreaView, Text, Button, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native-gesture-handler';
import styles from './styles/screenserchstyles';
import {Context as HistoryContext} from '../context/moviecontext';
import HeaderRight from '../component/HeaderRight';
export default function Screenserch() {
  const navigation = useNavigation();
  const [textsearch, setTexsearch] = useState('');
  const {state, addHistory} = useContext(HistoryContext);

  navigation.setOptions({
    title: '',
    headerRight: () => <HeaderRight title={'Favorite'} goTo={'Favorite'} />,
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.boxSerch}>
        <TextInput
          style={styles.textinput}
          onChangeText={text => setTexsearch(text)}
          placeholder={'seach'}
          value={textsearch}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Listmovie', {textsearch: textsearch}),
              addHistory(textsearch),
              setTexsearch('');
          }}
          style={styles.TouchableBoxSerch}>
          <Text style={styles.textSerch}>search</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={state}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Listmovie', {textsearch: item})}
            style={styles.TouchableBoxHistory}>
            <Text style={styles.textHistory}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
