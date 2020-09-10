import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import styled from 'styled-components/native';
import data from './artworks';

const Section = styled.View`
  width: 50%;
  justify-content: center;
  align-items: center;
`;

const ArtDesc = styled.Text`
  font-family: 'CormorantGaramond-Regular';
  font-size: 17;
  color: #21382f;
  text-align: center;
  margin-top: 15px;
`;

const exampleData = data.map((el, index) => ({
  key: `item-${index}`,
  title: el.title,
  artist: el.artist,
  price: el.price,
  img: el.imgUrl,
}));

class DraggableArtworks extends Component {
  state = {
    data: exampleData,
  };

  renderItem = ({item, drag, isActive}) => {
    return (
      <TouchableOpacity
        style={{
          width: '100%',
          height: 200,
          flexDirection: 'row',
          backgroundColor: isActive ? '#c1b8ae' : null,
        }}
        onLongPress={drag}>
        <Section>
          <Image
            source={{uri: item.img}}
            resizeMode={'contain'}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </Section>
        <Section>
          <ArtDesc>{item.title}</ArtDesc>
          <ArtDesc style={{color: '#466158'}}>{item.artist}</ArtDesc>
          <ArtDesc style={{color: '#030200', fontSize: 19, fontWeight: 'bold'}}>
            {item.price}
          </ArtDesc>
        </Section>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <DraggableFlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.key}`}
          onDragEnd={({data}) => this.setState({data})}
        />
      </View>
    );
  }
}

export default DraggableArtworks;
