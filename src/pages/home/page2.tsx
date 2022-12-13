import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BrickButton, TYText } from 'tuya-panel-kit';

function Page2() {
  const navigation = useNavigation<StackNavigationProp<any, any>>();
  return (
    <TYText>Teste</TYText>
  );
}

export default Page2;
