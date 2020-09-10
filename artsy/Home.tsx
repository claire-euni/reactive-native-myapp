import React from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import auction from './config';
import Logo from './Images/logo.svg';

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const AuctionContainer = styled.View`
  width: 100%;
  height: 50%;
  padding-bottom: 20;
  background-color: white;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 17;
  line-height: 30;
`;

const CurrentAuction = styled.TouchableOpacity`
  width: 210;
  border: 1px solid #9d9d9d;
  border-radius: 5;
`;

const AuctionTitle = styled.Text`
  font-size: 15;
  font-weight: bold;
  line-height: 20;
`;
const MainImg = styled.Image`
  width: 100%;
  height: 100%;
`;

const SmallImg = styled.Image`
  width: 100%;
  height: 50%;
`;

const TextContainer = styled.View`
  width: 100%;
  height: 30%;
  margin-top: 10;
  padding-left: 10;
`;

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <View
          style={{
            paddingBottom: 40,
            alignItems: 'center',
          }}>
          <Logo />
          <Text> Artsy</Text>
        </View>
        <AuctionContainer>
          <Title>Auctions</Title>
          <Text style={{fontSize: 15, color: '#9d9d9d'}}>
            Bid online in live and timed auctions
          </Text>
          <ScrollView horizontal={true} style={{marginTop: 20}}>
            {auction.map((el, idx) => {
              return (
                <CurrentAuction
                  key={idx}
                  style={{marginRight: 13}}
                  onPress={() => goToAuctionDetail(idx)}>
                  <View style={{height: '70%', flexDirection: 'row'}}>
                    <View style={{width: '60%', paddingRight: 5}}>
                      <MainImg source={{uri: el.uri1}} />
                    </View>
                    <View style={{width: '40%'}}>
                      <SmallImg source={{uri: el.uri2}} />
                      <SmallImg source={{uri: el.uri3}} />
                    </View>
                  </View>
                  <TextContainer>
                    <AuctionTitle numberOfLines={2}>{el.name}</AuctionTitle>
                    <Text style={{fontSize: 14, color: '#9d9d9d'}}>
                      {el.type} · {el.term}
                    </Text>
                  </TextContainer>
                </CurrentAuction>
              );
            })}
          </ScrollView>
        </AuctionContainer>
      </Container>
    </SafeAreaView>
  );
};
export default Home;
