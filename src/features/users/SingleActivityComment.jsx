import {Pressable, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';

export default function SingleActivityComment() {
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"

  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 3); //to check the text is more than 4 lines or not
  }, []);

  return (
    <Pressable
      style={{
        borderBottomWidth: 1,
        borderColor: '#EAEAEA',
        marginTop: 10,
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
          commented on a post
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
          marginTop: 10,
        }}>
        <Text
          onTextLayout={onTextLayout}
          numberOfLines={textShown ? undefined : 3}
          style={{
            lineHeight: 21,
            flex: 1,
            fontWeight: '500',
            fontSize: 15,
            marginBottom: 10,
          }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          voluptas tenetur ducimus, laborum, quos, quas quidem quae quia
          quibusdam Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Harum culpa quam tempore provident quo pariatur autem quos laudantium
          sunt dolorum praesentium voluptatem, est odio dolore eveniet soluta
          molestiae exercitationem delectus?
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
    </Pressable>
  );
}
