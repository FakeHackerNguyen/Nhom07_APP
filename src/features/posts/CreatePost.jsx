import {
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import ModalVisiblePost from './ModalVisiblePost';
import useLogin from '../authentication/useLogin';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Row = styled.View`
  margin-left: 20px;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

function Header({disabledPost, onOpenModal, post}) {
  const navigation = useNavigation();

  return (
    <Container>
      <Row>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/icons/close.png')} />
        </TouchableWithoutFeedback>
        <Image
          style={{
            borderWidth: 1,
            borderColor: '#e9e9e9',
            borderRadius: 60,
            overflow: 'hidden',
            width: 40,
            height: 40,
          }}
          source={require('../../../assets/images/uploadAvatar.png')}
        />
        <TouchableOpacity
          onPress={onOpenModal}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
          }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: '#696969',
            }}>
            {post.type}
          </Text>
          <Image
            style={{
              width: 10,
              height: 6,
              tintColor: '#696969',
            }}
            source={require('../../../assets/images/vector.png')}
          />
        </TouchableOpacity>
      </Row>
      <TouchableOpacity
        disabled={disabledPost}
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 5,
          paddingBottom: 5,
          borderWidth: 1,
          borderColor: '#EAEAEA',
          backgroundColor: '#EAEAEA',
          borderRadius: 25,
          marginRight: 20,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: '#a4a4a4',
          }}>
          Post
        </Text>
      </TouchableOpacity>
    </Container>
  );
}
function CreatePost() {
  const {profile} = useLogin();
  const [disabledPost, setDisabledPost] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [post, setPost] = useState({
    owner: profile?.user.authenticatedUser?._id,
    description: '',
    media: '',
    type: 'Anyone',
  });

  console.log(post);

  function handleChangeText(text) {
    setPost({...post, description: text});
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <ModalVisiblePost
        onCloseModal={() => setModalVisible(false)}
        modalVisible={modalVisible}
        onSetData={setPost}
        data={post}
      />
      <Header
        disabledPost={disabledPost}
        onOpenModal={() => setModalVisible(true)}
        post={post}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          height: '100%',
          marginLeft: 20,
          marginRight: 20,
          flexDirection: 'column',
        }}>
        <TextInput
          multiline={true}
          style={{
            fontSize: 20,
            color: '#000',
            fontWeight: '600',
            height: '90%',
            paddingTop: 20,
          }}
          placeholder="Share your thoughts"
          placeholderTextColor="#666"
          onChangeText={text => handleChangeText(text)}
        />
        <TouchableOpacity style={{marginLeft: 30}}>
          <Image
            style={{
              width: 25,
              height: 20,
            }}
            source={require('../../../assets/icons/file.png')}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default CreatePost;
