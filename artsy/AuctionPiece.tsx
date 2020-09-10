import React from 'react';
import {Text, Image} from 'react-native';
import styled from 'styled-components/native';

const ArtContainer = styled.View`
  width: 50%;
  align-items: center;
  margin-bottom: 10;
`;

const AuctionPiece = ({img, desc, price}) => {
  return (
    <ArtContainer>
      <Image
        resizeMode={'contain'}
        source={{uri: img}}
        style={{width: 180, height: 200}}
      />
      <Text
        style={{
          color: '#222323',
          fontFamily: 'CormorantGaramond-LightItalic',
          lineHeight: 20,
        }}
        numberOfLines={2}>
        {desc}
      </Text>
      <Text style={{color: '#5f5e5e', lineHeight: 30}}>£ {price}</Text>
    </ArtContainer>
  );
};

export default AuctionPiece;
