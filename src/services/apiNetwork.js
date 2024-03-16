import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrlApi} from '../constants/baseUrlApi';

export async function getPendingConnection() {
  const accessToken = await AsyncStorage.getItem('accessToken');
  try {
    const res = await fetch(`${baseUrlApi}/api/v1/connections/pending`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: 'same-origin',
    });

    const data = await res.json();
    if (data.error) {
      throw new Error(data.message);
    }

    return {data, errorMessage: ''};
  } catch (error) {
    return {data: [], errorMessage: error.message};
  }
}

export async function rejectPendingConnection({connectionId}) {
  const accessToken = await AsyncStorage.getItem('accessToken');
  try {
    const res = await fetch(
      `${baseUrlApi}/api/v1/connections/${connectionId}/reject`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: 'same-origin',
      },
    );

    const data = await res.json();
    if (data.error) {
      throw new Error(data.message);
    }

    return {data, errorMessage: ''};
  } catch (error) {
    return {data: null, errorMessage: error.message};
  }
}

export async function confirmPendingConnection({connectionId}) {
  const accessToken = await AsyncStorage.getItem('accessToken');
  try {
    const res = await fetch(
      `${baseUrlApi}/api/v1/connections/${connectionId}/confirm`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: 'same-origin',
      },
    );

    const data = await res.json();
    if (data.error) {
      throw new Error(data.message);
    }

    return {data, errorMessage: ''};
  } catch (error) {
    return {data: null, errorMessage: error.message};
  }
}
