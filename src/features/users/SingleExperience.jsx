import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useCallback, useState} from 'react';

export default function SingleExperience() {
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
          Course Facilitator | Coach | Consultant
        </Text>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <Text style={{fontSize: 15, fontWeight: 500}}>Pseudoscops</Text>
          <View
            style={{
              width: 4,
              height: 4,
              borderRadius: 50,
              backgroundColor: '#000',
            }}
          />
          <Text style={{fontSize: 15, fontWeight: 500}}>Full-time</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <Text
            style={{
              color: '#666',
              fontWeight: 600,
            }}>
            Jun 2018 - Mar 2022
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
              fontWeight: 600,
            }}>
            3 yrs 10 mos
          </Text>
        </View>
        <Text
          style={{
            color: '#666',
            fontWeight: 600,
          }}>
          Singapore
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
