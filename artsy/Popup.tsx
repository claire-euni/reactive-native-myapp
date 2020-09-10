import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Dimensions, View, Text, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';
import {standardAction} from './Redux/Action/standardAction';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const checked = require('./Images/checked.png');
const closeBtn = require('./Images/close.png');

const PopupContainer = styled.View`
  margin-top: 20;
  height: 50%;
  border-radius: 10;
  background-color: white;
  justify-content: center;
`;

const FilterTitle = styled.Text`
  font-family: 'CormorantGaramond-Regular';
  font-size: 20;
  margin: 20px 0 0 20px;
`;

const SortContainer = styled.View`
  height: 40%;
  padding: 0 20px;
`;

const SortBy = styled.Text`
  font-family: 'CormorantGaramond-Regular';
  font-size: 17;
  line-height: 30;
`;

const UnderLine = styled.View`
  height: 1;
  margin: 10px 0;
  background-color: #b9b6b6;
`;

const ApplyBtn = styled.TouchableOpacity`
  background-color: black;
  margin: 0 130px 40px 130px;
  border-radius: 2;
`;

const ApplyText = styled.Text`
  color: white;
  font-size: 17;
  text-align: center;
  line-height: 40;
`;

const SortStandards = [
  {id: 0, name: 'Title A-Z'},
  {id: 1, name: 'Highest Price'},
  {id: 2, name: 'Lowest Price'},
];

export interface Props {
  numberChecked: number;
}

const Popup = ({openPopup, closePopup}) => {
  const [numberChecked, setNumberChecked] = useState(0);

  const disptach = useDispatch();

  const selectStandard = (id: number) => {
    setNumberChecked(id);
  };

  return (
    <Modal
      animationIn="slideInUp"
      animationOut="slideOutDown"
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      isVisible={openPopup}
      style={{margin: 0}}>
      <PopupContainer>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <FilterTitle>Refine</FilterTitle>
          <TouchableOpacity
            style={{marginRight: 20, marginTop: 20}}
            onPress={() => closePopup(false)}>
            <Image style={{width: 22, height: 22}} source={closeBtn} />
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 20}}>
          Sort
        </Text>
        <UnderLine style={{backgroundColor: '#525252'}} />
        <SortContainer>
          {SortStandards.map((el, idx) => {
            return (
              <>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                  onPress={() => selectStandard(el.id)}>
                  <SortBy>{el.name}</SortBy>
                  {idx === numberChecked && (
                    <View>
                      <Image style={{width: 30, height: 30}} source={checked} />
                    </View>
                  )}
                </TouchableOpacity>
                <UnderLine />
              </>
            );
          })}
        </SortContainer>
        <ApplyBtn
          onPress={() => {
            disptach(standardAction(numberChecked));
            closePopup(false);
          }}>
          <ApplyText>Apply</ApplyText>
        </ApplyBtn>
      </PopupContainer>
    </Modal>
  );
};

export default Popup;
