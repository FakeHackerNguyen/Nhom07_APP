import {Image, Text, View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const ContainerPost = styled.View`
  margin-top: 10px;
  flex-direction: column;
  background-color: #fff;
`;

const HeaderPost = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Avatar = styled.Image`
  border-width: 1px;
  border-color: #e9e9e9;
  border-radius: 40px;
  overflow: hidden;
  margin-left: 20px;
  width: 60px;
  height: 60px;
`;

const Post = styled.View`
  flex-direction: column;
`;

const User = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Information = styled.View`
  width: 200px;
`;

const Follow = styled.View`
  flex-direction: row;
  margin-right: 20px;
  align-items: center;
  width: 80px;
  justify-content: space-around;
`;

const Interaction = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
  height: 50px;
`;

const IconReacts = styled.View`
  flex-direction: row;
`;

const Reacts = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const ContainerReact = styled.View`
  width: 25px;
  height: 25px;
  background-color: ${props => props.bgColor || '#d9d9d9'};
  border-radius: 50px;
`;

function Suggested() {
  return (
    <View
      style={{
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#EAEAEA',
        marginLeft: 10,
        marginRight: 10,
      }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '500',
        }}>
        Suggested
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: 100,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          style={{
            marginLeft: 20,
          }}
          source={require('../../../assets/icons/dot.png')}
        />
        <Image
          style={{
            width: 20,
            height: 20,
          }}
          source={require('../../../assets/icons/close.png')}
        />
      </View>
    </View>
  );
}

function SinglePost() {
  return (
    <ContainerPost>
      <Suggested />
      <Post>
        <HeaderPost>
          <User>
            <Avatar source={require('../../../assets/images/default.png')} />
            <Information
              style={{
                width: 200,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  marginLeft: 10,
                }}>
                Nguyen Toan
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: '500',
                }}>
                Science Educator
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: '500',
                }}>
                6d
              </Text>
            </Information>
          </User>

          <Follow>
            <Image
              style={{
                width: 15,
                height: 15,
              }}
              source={require('../../../assets/icons/plus.png')}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#2D64BC',
              }}>
              Follow
            </Text>
          </Follow>
        </HeaderPost>
        <View>
          <Text
            style={{
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 10,
            }}>
            Origami, the traditional Japanese art of paper folding, offers a
            multitude of benefits abc xyz abc
          </Text>
          <Image
            style={{
              width: '100%',
              height: 400,
            }}
            source={require('../../../assets/images/example.png')}
          />
        </View>
        <Interaction>
          <Reacts>
            <IconReacts>
              <ContainerReact bgColor="#2D64BC">
                <Image
                  style={{
                    alignSelf: 'center',
                  }}
                  source={require('../../../assets/icons/like.png')}
                />
              </ContainerReact>
              <ContainerReact
                bgColor="#45F94D"
                style={{
                  marginLeft: -10,
                }}>
                <Image
                  style={{
                    alignSelf: 'center',
                    marginTop: 2,
                  }}
                  source={require('../../../assets/icons/clap.png')}
                />
              </ContainerReact>
              <ContainerReact
                bgColor="#ED8080"
                style={{
                  marginLeft: -10,
                }}>
                <Image
                  style={{
                    alignSelf: 'center',
                    marginTop: 2,
                  }}
                  source={require('../../../assets/icons/heart.png')}
                />
              </ContainerReact>
            </IconReacts>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#6C6C6C',
              }}>
              1,048
            </Text>
          </Reacts>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 10,
            }}>
            <Text
              style={{
                color: '#6C6C6C',
                fontWeight: '600',
              }}>
              100 likes
            </Text>
            <View
              style={{
                width: 5,
                height: 5,
                borderRadius: 50,
                backgroundColor: '#6C6C6C',
              }}></View>
            <Text
              style={{
                marginRight: 10,
                color: '#6C6C6C',
                fontWeight: '600',
              }}>
              10 comments
            </Text>
          </View>
        </Interaction>
      </Post>
    </ContainerPost>
  );
}

export default SinglePost;
