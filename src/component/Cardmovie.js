import React from 'react'
import { TouchableOpacity,View,Image,Text } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import styles from './styles/CardmovieStyles'
export default function Cardmovie(props) {
    const navigation = useNavigation()
    return(
        <>
        <TouchableOpacity
         style={styles.cardContainer}
            onPress={() =>
              navigation.navigate('Detail', {
                uri: props.uri,
                original_title: props.original_title,
                overview: props.overview,
                vote_average: props.vote_average,
                release_date: props.release_date,
                id:props.id
              })
            }>
            
              <View style={styles.ImageContainer}>
                <Image
                  style={styles.ImageMovie}
                  source={{
                    uri: props.uri,
                  }}
                />
              </View>

              <View style={styles.textContainer}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  {props.original_title}
                </Text>
                <Text style={{color: '#bfbdbd'}}> {props.release_date} </Text>
                <Text numberOfLines={4}>{props.overview}</Text>
              </View>

              
              
            
          </TouchableOpacity>
        </>
    )
    
}
