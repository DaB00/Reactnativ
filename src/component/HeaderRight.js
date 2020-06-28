import React from 'react';
import {View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export default function HeaderRight(props) {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title={props.title}
        onPress={() => navigation.navigate(props.goTo)}
      />
    </View>
  );
}
