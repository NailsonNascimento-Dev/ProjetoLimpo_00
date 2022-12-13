import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ButtonPower from 'components/buttonPower';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Home: React.FC = () => {

  const data = [
    { text: 'page1', path: 'page1' },
    { text: 'page3', path: 'page3' },
  ];

  const Tab = createBottomTabNavigator();


  return (
    <>
      <ButtonPower />

      <NavigationContainer >
        <Tab.Navigator>
          <Tab.Screen name="Evento" component={ButtonPower} />
         
        </Tab.Navigator>
      </NavigationContainer>
    </>

  );
};

export default Home;
