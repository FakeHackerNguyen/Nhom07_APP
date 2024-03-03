import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';

const Interaction = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

const IconReacts = styled.View`
  flex-direction: row;
`;

const Reacts = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const ContainerReact = styled.View`
  width: 10px;
  height: 10px;
  margin-left: 6px;
  background-color: ${props => props.bgColor || '#d9d9d9'};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export default function SingleActivityPost() {
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"

  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 3); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);

  return (
    <Pressable
      style={{
        borderBottomWidth: 1,
        borderColor: '#EAEAEA',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
        }}>
        <Text
          style={{
            color: '#666',
            fontWeight: '500',
          }}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 15,
            }}>
            Nguyen Quoc Toan
          </Text>{' '}
          reposted this
        </Text>

        <View
          style={{
            width: 4,
            height: 4,
            borderRadius: 50,
            backgroundColor: '#6C6C6C',
          }}
        />
        <Text
          style={{
            color: '#666',
            fontWeight: '600',
          }}>
          1w
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: 10,
          marginTop: 10,
        }}>
        <Image
          style={{
            width: 80,
            height: 80,
            borderRadius: 10,
          }}
          source={require('../../../assets/images/example.png')}
        />
        <Text
          onTextLayout={onTextLayout}
          numberOfLines={textShown ? undefined : 3}
          style={{
            lineHeight: 21,
            flex: 1,
            fontWeight: '500',
            fontSize: 15,
          }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          voluptas tenetur ducimus, laborum, quos, quas quidem quae quia
          quibusdam Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Natus voluptas laboriosam optio, quia fuga distinctio nam modi et
          quibusdam, eum necessitatibus quam repellat officia incidunt quis
          quaerat? Alias, accusantium illo Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ullam quo, eligendi temporibus tenetur
          officia quis dolores, id praesentium quaerat minus delectus laborum,
          quam aliquid itaque ex doloribus blanditiis eaque. Quae.
        </Text>
        {lengthMore ? (
          <Text
            onPress={toggleNumberOfLines}
            style={{
              lineHeight: 21,
              position: 'absolute',
              color: '#666',
              fontWeight: '600',
              right: 0,
              top: 42,
              backgroundColor: 'white',
            }}>
            {!textShown && '...see more'}
          </Text>
        ) : null}
      </View>
      <Interaction>
        <Reacts>
          <IconReacts>
            <ContainerReact bgColor="#508DE2">
              <Image source={require('../../../assets/icons/like.png')} />
            </ContainerReact>
            <ContainerReact bgColor="#098D0E">
              <Image source={require('../../../assets/icons/celebrate.png')} />
            </ContainerReact>
            <ContainerReact bgColor="#D17655">
              <Image source={require('../../../assets/icons/love.png')} />
            </ContainerReact>
          </IconReacts>
          <Text
            style={{
              fontWeight: '600',
              color: '#6C6C6C',
            }}>
            1,048
          </Text>
          <View
            style={{
              width: 4,
              height: 4,
              borderRadius: 50,
              backgroundColor: '#6C6C6C',
            }}
          />
          <Text
            style={{
              color: '#6C6C6C',
              fontWeight: '600',
            }}>
            100 comment
          </Text>
        </Reacts>
      </Interaction>
    </Pressable>
  );
}
