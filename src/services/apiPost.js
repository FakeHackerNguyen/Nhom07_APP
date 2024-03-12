import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrlApi} from '../constants/baseUrlApi';

export async function createPost({formData}) {
  const accessToken = await AsyncStorage.getItem('accessToken');
  try {
    const res = await fetch(`${baseUrlApi}/api/v1/posts/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: 'same-origin',
      body: formData,
    });

    const data = await res.json();

    if (data.error) {
      throw new Error(data.message);
    }

    return {data, errorMessage: ''};
  } catch (error) {
    return {data: null, errorMessage: error.message};
  }
}
