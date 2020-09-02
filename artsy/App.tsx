import 'react-native-gesture-handler';
import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MainRoutes from './mainRoutes';
import Home from './Home';
import Auction from './Auction';
import Info from './Account';
// import {Provider} from 'mobx-react';
// import {IStateTreeNode} from 'mobx-state-tree';

const Tab = createMaterialBottomTabNavigator();
// const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{title: 'Artsy'}} />
        <Stack.Screen name="SummerAuction" component={SummerAuction} />
      </Stack.Navigator> */}
      <Tab.Navigator barStyle={{backgroundColor: 'white'}}>
        {MainRoutes.map((el) => (
          <Tab.Screen
            name={el.name}
            component={el.com}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <Image
                    source={focused ? el.activeIcon : el.inactiveIcon}
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                );
              },
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
