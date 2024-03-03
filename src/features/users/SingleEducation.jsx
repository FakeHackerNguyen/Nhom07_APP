import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useCallback, useState} from 'react';

export default function SingleEducation() {
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
    <View
      style={{
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1,
        paddingVertical: 15,
        flexDirection: 'row',
        gap: 10,
      }}>
      <Image
        style={{
          width: 50,
          height: 50,
        }}
        source={{
          uri: 'https://res.cloudinary.com/myshop-it/image/upload/v1708862021/companies/default-company_zlxp3l.png',
        }}
      />
      <View
        style={{
          flex: 1,
        }}>
        <Text style={{fontSize: 18, fontWeight: 700}}>
          Sookmyung Women's University
        </Text>

        <Text style={{fontSize: 15, fontWeight: 500}}>
          Master of Business Administration - MBA, Marketing
        </Text>

        <Text
          style={{
            color: '#666',
            fontWeight: 600,
          }}>
          2012 - 2016
        </Text>

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
            }}>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nulla cupiditate labore vitae quibusdam itaque ipsam
            provident, necessitatibus, rem hic accusantium deleniti repellat
            aliquam. Nam voluptatum aliquam provident modi similique aut?
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

        <Text
          style={{
            fontWeight: 800,
            marginTop: 10,
          }}>
          Skills:{' '}
          <Text
            style={{
              fontWeight: 600,
            }}>
            Coaching, Training, Facilitation, Consulting
          </Text>
        </Text>
      </View>
    </View>
  );
}
