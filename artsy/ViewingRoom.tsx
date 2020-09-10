import * as React from 'react';
import {View, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import DraggableArtworks from './DraggableArtworks';

const Title = styled.Text`
  font-family: 'CormorantGaramond-Regular';
  font-size: 20;
  text-align: center;
  margin: 30px 0;
`;

const ViewingRoom = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Title>Viewing Room</Title>
        <DraggableArtworks />
      </View>
    </SafeAreaView>
  );
};
export default ViewingRoom;
