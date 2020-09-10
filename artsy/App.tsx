import 'react-native-gesture-handler';
import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MainRoutes from './mainRoutes';
import {createStore} from 'redux';
import rootReducer from './Redux/Reducer/index.js';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <NavigationContainer>
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
    </Provider>
  );
};
export default App;
