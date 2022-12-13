import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BrickButton,TYText } from 'tuya-panel-kit';

function Page1() {
  const route = useRoute();
  console.log('[navigation]params', route.params);

  const navigation = useNavigation<StackNavigationProp<any, any>>();
  return (
    <TYText> Teste</TYText>
  );
}

export default Page1;
