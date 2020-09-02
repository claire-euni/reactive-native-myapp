import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styled from 'styled-components/native';
import Logo from './Images/logo.svg';
import artworks from './artworks';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = styled.View`
  width: 100%;
  height: 40%;
`;
const BidBtn = styled.TouchableOpacity`
  background-color: black;
  width: 100%;
  height: 40;
  border-radius: 2;
`;
const BidBtnText = styled.Text`
  color: white;
  font-size: 15;
  text-align: center;
  margin-top: 10;
`;

const AuctionTitle = styled.View`
  width: 100%;
  padding-right: 50%;
  margin-left: 10;
  margin-top: 10;
`;

const HeaderBottom = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20;
`;

const ArtContainer = styled.View`
  width: 50%;
  align-items: center;
  margin-bottom: 10;
`;

const AuctionContainer = styled.View`
  margin-top: 50;
  margin-left: 10;
  margin-right: 10;
  flex-direction: row;
`;

const renderItem = ({item}) => {
  return (
    <ArtContainer>
      <Image
        source={{uri: item.urls.regular}}
        style={{width: 180, height: 200}}
      />
      <Text
        style={{color: '#abaaaa', fontStyle: 'italic', lineHeight: 20}}
        numberOfLines={2}>
        {item.description}
      </Text>
      <Text style={{color: '#5f5e5e', lineHeight: 30}}>£ {item.height}</Text>
    </ArtContainer>
  );
};
const LIMIT = 8;

const Home = () => {
  const [arts, setArts] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch(
      'https://api.unsplash.com/search/photos?per_page=100&query=painting&client_id=VAMxSvZ06ScJV5UwwOTs6ZF0XPw9g7XrzCfrkJjwEXk',
    )
      .then((res) => res.json())
      .then((res) =>
        setArts(arts.concat(res.results.slice(offSet, offSet + LIMIT))),
      )
      .then(() => {
        setOffSet(offSet + LIMIT);
        setLoading(false);
      })
      .catch((e) => setLoading(false));
  };

  //urls.full or urls.regular

  useEffect(() => {
    fetchData();
  }, []);

  const onEndReached = () => {
    if (loading) {
      return;
    } else {
      fetchData();
    }
  };
  useEffect(() => {});
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header>
        <Image
          source={{
            uri:
              'https://d7hftxdivxxvm.cloudfront.net?resize_to=fill&width=1800&height=600&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FLZODmGK5SIjUFKp6p65QJQ%2Fwide.jpg',
          }}
          style={{width: '100%', height: 200}}
        />
        <AuctionTitle>
          <Text style={{fontSize: 19, color: '#71a9b9', fontWeight: 'bold'}}>
            Forum Auctions: The Summer Selection
          </Text>
        </AuctionTitle>
        <HeaderBottom style={{marginHorizontal: 10}}>
          <BidBtn>
            <BidBtnText>Register to bid</BidBtnText>
          </BidBtn>
          <Text style={{fontSize: 15, color: 'gray', lineHeight: 30}}>
            Registration required to bid
          </Text>
        </HeaderBottom>
      </Header>
      <AuctionContainer>
        <FlatList
          data={arts}
          renderItem={renderItem}
          horizontal={false}
          numColumns={2}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.8}
        />
      </AuctionContainer>
    </SafeAreaView>
  );
};
export default Home;
