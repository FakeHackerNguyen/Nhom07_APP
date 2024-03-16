import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Invitations from './Invitations';
import {
  confirmPendingConnection,
  getPendingConnection,
  rejectPendingConnection,
} from '../../services/apiNetwork';
import {useIsFocused} from '@react-navigation/native';
import Spinner from '../../ui/Spinner';

const Network = () => {
  const [invitations, setInvitations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isFocused = useIsFocused();
  console.log('isFocused', isFocused);

  async function fetchPendingConnection() {
    setIsLoading(true);
    const {data} = await getPendingConnection();
    setIsLoading(false);
    setInvitations(data);
  }

  async function confirmInvitation(connectionId) {
    setIsLoading(true);
    await confirmPendingConnection({connectionId: connectionId});
    await fetchPendingConnection();
    setIsLoading(false);
  }

  async function rejectInvitation(connectionId) {
    setIsLoading(true);
    await rejectPendingConnection({connectionId: connectionId});
    await fetchPendingConnection();
    setIsLoading(false);
  }

  useEffect(() => {
    if (isFocused) {
      fetchPendingConnection();
    }
  }, [isFocused]);

  return (
    <ScrollView
      style={{
        flexDirection: 'column',
      }}>
      {isLoading && <Spinner />}
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          padding: 20,
          borderTopColor: '#e9e9e9',
          borderTopWidth: 1,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
          }}>
          Invitation <Text>({invitations.count})</Text>
        </Text>
        <Image source={require('../../../assets/icons/next.png')} />
      </TouchableOpacity>
      {invitations?.data?.length > 0 && (
        <Invitations
          invitations={invitations.data}
          onConfirmConnection={confirmInvitation}
          onRejectConnection={rejectInvitation}
        />
      )}
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          padding: 20,
          marginTop: 10,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
          }}>
          Manage my network
        </Text>
        <Image source={require('../../../assets/icons/next.png')} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Network;
