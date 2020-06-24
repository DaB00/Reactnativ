import React, {useContext, useState} from 'react';
import {SafeAreaView, Text, Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Context as BlogContext} from '../context/moviecontext';
import {TextInput, TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import {Context as HistoryContext} from '../context/moviecontext';
//   fetapi();
export default function Screenserch() {
  const navigation = useNavigation();
  const [textsearch, setTexsearch] = useState('');
  const {state, addHistory} = useContext(HistoryContext);
  
  navigation.setOptions({
    title:"",
    headerRight:()=>(
      <View >
        <Button
        title="Favorite"
        onPress={()=>navigation.navigate('Favorite')}
        
      />
      </View>
    )
  })
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
      <View>
        <View style={{flexDirection: 'row', backgroundColor: '#dbd9d9'}}>
          <TextInput
            style={{
              height: 40,
              borderWidth: 1,
              borderColor: 'gray',
              margin: '2%',
              fontSize: 20,
              flex: 8,
              borderRadius: 15,
              paddingLeft: 15,
              backgroundColor: 'white',
            }}
            onChangeText={text => setTexsearch(text)}
            placeholder={'Search'}
            value={textsearch}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(
                'Listmovie',
                {textsearch: textsearch},
                
              ),
              addHistory(textsearch),
                setTexsearch('');
            }}
            style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 18, color: '#71b5f9', paddingRight: '2%'}}>
              search
            </Text>
          </TouchableOpacity>

        </View>
      </View>
      <FlatList 
      data={state}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate('Listmovie',{textsearch:item})}>
          <View style={{width:'100%',height:40,justifyContent:'center', borderBottomWidth: 1,borderBottomColor:'#c5c5c5'}}>
          <Text style={{paddingLeft:15,fontSize:20}}>
          {item}
          </Text>
        </View>
        </TouchableOpacity>
        
      )}
      keyExtractor={item=>item}
      />
    </SafeAreaView>
  );
}
