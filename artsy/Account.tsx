import * as React from 'react';
import {Text, SafeAreaView} from 'react-native';

const Info = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Info</Text>
    </SafeAreaView>
  );
};
export default Info;
