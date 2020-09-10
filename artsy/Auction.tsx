import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import CountDown from 'react-native-countdown-component';
import Popup from './Popup';
import AuctionPiece from './AuctionPiece';

const Header = styled.View`
  height: 40%;
`;

const CountDownContainer = styled.View`
  height: 200;
  justify-content: center;
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
  margin: 10px 0 0 10px;
`;

const HeaderBottom = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20;
`;

const AuctionContainer = styled.View`
  margin: 30px 10px 0 10px;
  flex-direction: row;
`;

const RefineRow = styled.View`
  align-items: flex-end;
  margin: 50px 30px 0 30px;
`;

const SortRow = styled(RefineRow)`
  align-items: flex-start;
  margin-top: 10px;
`;

const RefineBtn = styled.TouchableOpacity`
  width: 70;
  border: 1px solid #cecace;
  border-radius: 5;
`;

const LIMIT = 4;

const Home = () => {
  const [arts, setArts] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const [loading, setLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [sortName, setSortName] = useState('Random');

  const standardNumber = useSelector((state: any) => {
    return state.numberReducer.standard;
  });

  const standardName = useSelector((state: any) => {
    return state.numberReducer.name;
  });

  const fetchData = () => {
    setLoading(true);
    fetch(
      'https://api.unsplash.com/search/photos?per_page=200&query=painting&client_id=VAMxSvZ06ScJV5UwwOTs6ZF0XPw9g7XrzCfrkJjwEXk',
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

  const renderItem = ({item}) => {
    //A-Z 정렬
    if (standardNumber === 0) {
      arts.sort((a: any, b: any) => {
        if (a.description === null || b.description === null) {
          return a.description === '';
        } else {
          return a.description.localeCompare(b.description);
        }
      });
      setArts(arts);
      setSortName(standardName);

      return (
        <AuctionPiece
          img={item.urls.regular}
          desc={item.description}
          price={item.height}
        />
      );
    }
    if (standardNumber === 1) {
      arts.sort((a: any, b: any) => b.height - a.height);
      setArts(arts);
      setSortName(standardName);

      return (
        <AuctionPiece
          img={item.urls.regular}
          desc={item.description}
          price={item.height}
        />
      );
    }
    if (standardNumber === 2) {
      arts.sort((a: any, b: any) => a.height - b.height);
      setArts(arts);
      setSortName(standardName);

      return (
        <AuctionPiece
          img={item.urls.regular}
          desc={item.description}
          price={item.height}
        />
      );
    }
  };

  useEffect(() => {
    renderItem;
  }, [arts, sortName]);

  const closePopup = (x: boolean) => {
    setOpenPopup(x);
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header>
          <View style={{position: 'relative', height: 200}}>
            <Image
              style={{position: 'absolute', width: '100%', height: 200}}
              source={{
                uri:
                  'https://d7hftxdivxxvm.cloudfront.net?resize_to=fill&width=1800&height=600&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FLZODmGK5SIjUFKp6p65QJQ%2Fwide.jpg',
              }}
            />
            <CountDownContainer>
              <CountDown
                until={60 * 60 * 24 * 7}
                onFinish={() => alert('finished')}
                size={20}
                timeLabels={{d: 'DAYS', h: 'HRS', m: 'MIN', s: 'SEC'}}
                showSeparator={true}
                digitStyle={{backgroundColor: 'transparent'}}
                separatorStyle={{color: 'white'}}
                digitTxtStyle={{color: 'white', marginTop: 20}}
                timeLabelStyle={{color: 'white'}}
              />
            </CountDownContainer>
          </View>
          <AuctionTitle>
            <Text
              style={{
                fontSize: 22,
                color: '#23547f',
                fontFamily: 'CormorantGaramond-Medium',
              }}>
              Forum Auctions: The Summer Selection
            </Text>
          </AuctionTitle>
          <HeaderBottom style={{marginHorizontal: 10}}>
            <BidBtn>
              <BidBtnText>Register to bid</BidBtnText>
            </BidBtn>
            <Text
              style={{
                fontFamily: 'CormorantGaramond-Regular',
                fontSize: 17,
                color: '#5e5e5c',
                marginTop: 8,
              }}>
              Registration required to bid
            </Text>
          </HeaderBottom>
        </Header>
        <RefineRow>
          <RefineBtn
            onPress={() => {
              setOpenPopup(true);
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                lineHeight: 30,
                textAlign: 'center',
              }}>
              Refine
            </Text>
          </RefineBtn>
        </RefineRow>
        <SortRow>
          <Text
            style={{fontFamily: 'CormorantGaramond-LightItalic', fontSize: 17}}>
            {sortName}
          </Text>
        </SortRow>
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
      <Popup openPopup={openPopup} closePopup={closePopup} />
    </>
  );
};
export default Home;
