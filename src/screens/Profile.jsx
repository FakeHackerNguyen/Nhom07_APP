import React, {useCallback, useState} from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import styled from 'styled-components/native';

import useLogin from '../features/authentication/useLogin';
import Button from '../ui/Button';
import ActivityNavigation from '../features/users/ActivityNavigation';
import Educations from '../features/users/Educations';
import Experiences from '../features/users/Experiences';
import Skills from '../features/users/Skills';

const Title = styled.Text`
  font-size: 25px;
  font-weight: 700;
  margin-left: 20px;
  margin-top: 10px;
`;

const CommonView = styled.View`
  background-color: #fff;
  margin-top: 10px;
`;

function Profile() {
  const {profile} = useLogin();
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
    <ScrollView
      style={{
        flexDirection: 'column',
        backgroundColor: '#DFDCD7',
      }}>
      <Pressable>
        <Image
          style={{
            height: 100,
            width: '100%',
          }}
          source={require('../../assets/images/example.png')}
        />
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: '#fff',
            borderRadius: 15,
            position: 'absolute',
            right: 10,
            top: 10,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 15,
              height: 12,
            }}
            source={require('../../assets/icons/camera.png')}
          />
        </View>
      </Pressable>
      <View>
        <View
          style={{
            backgroundColor: '#fff',
          }}>
          <Image
            style={{
              borderWidth: 1,
              borderColor: '#e9e9e9',
              borderRadius: 60,
              overflow: 'hidden',
              width: 120,
              height: 120,
              marginTop: -60,
              marginLeft: 20,
            }}
            source={{uri: profile?.user.authenticatedUser.avatar.url}}
          />
          <Text
            style={{
              fontWeight: '700',
              fontSize: 30,
              marginTop: 15,
              marginLeft: 20,
              flex: 1,
            }}>
            Nguyen Toan
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              marginLeft: 20,
              flex: 1,
            }}>
            Software Engineering at Microchip Technology
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 20,
              fontWeight: '500',
              marginLeft: 20,
              flex: 1,
            }}>
            Microchip Technology Inc
          </Text>
          <Text
            style={{
              color: '#666',
              fontWeight: '500',
              fontSize: 15,
              marginLeft: 20,
              flex: 1,
            }}>
            Ho Chi Minh City, Vietnam
          </Text>
          <Text
            style={{
              color: '#666',
              fontWeight: '700',
              fontSize: 15,
              marginTop: 15,
              marginLeft: 20,
              flex: 1,
            }}>
            500+ connections
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 15,
              marginLeft: 20,
              marginBottom: 10,
            }}>
            <Button
              backgroundColor="#2D64BC"
              colorText="#fff"
              width={170}
              textSize={18}
              padding={6}>
              Open to
            </Button>
            <Button
              borderWidth={1}
              borderColor="#2D64BC"
              colorText="#2D64BC"
              width={170}
              textSize={18}
              padding={6}>
              Add section
            </Button>
            <TouchableOpacity>
              <View
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: '#fff',
                  borderRadius: 15,
                  borderColor: '#666',
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 15,
                }}>
                <Image source={require('../../assets/icons/dot.png')} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 15,
            top: 15,
          }}>
          <Image source={require('../../assets/icons/edit.png')} />
        </TouchableOpacity>
      </View>
      <CommonView>
        <Title>About</Title>
        <View style={{marginTop: 10, marginRight: 20}}>
          <Text
            onTextLayout={onTextLayout}
            numberOfLines={textShown ? undefined : 3}
            style={{
              lineHeight: 21,
              marginLeft: 20,
              marginBottom: 10,
              fontSize: 15,
              fontWeight: '500',
              flex: 1,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
            inventore nulla assumenda, ullam maxime ut laudantium? Quaerat,
            cupiditate quis, ea incidunt illo doloribus similique veniam odio
            dolor non in possimus.
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
      </CommonView>
      <CommonView>
        <Title>Activity</Title>
        <Text
          style={{
            marginLeft: 20,
            marginBottom: 10,
            fontSize: 16,
            fontWeight: '600',
            color: '#666',
          }}>
          919 followers
        </Text>
        <ActivityNavigation />
      </CommonView>
      <CommonView>
        <Title>Experience</Title>
        <Experiences />
      </CommonView>
      <CommonView>
        <Title>Education</Title>
        <Educations />
      </CommonView>
      <CommonView>
        <Title>Skills</Title>
        <Skills />
      </CommonView>
      <View
        style={{
          height: 20,
        }}
      />
    </ScrollView>
  );
}

export default Profile;
