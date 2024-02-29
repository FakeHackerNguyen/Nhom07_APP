import {baseUrlApi} from '../constants/baseUrlApi';

export async function updateInfoNewUser({id, userInfo}) {
  try {
    const res = await fetch(`${baseUrlApi}/api/v1/users/new/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      credentials: 'same-origin',
      body: userInfo.toString(),
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

export async function updateAvatar({id, formData}) {
  try {
    const res = await fetch(`${baseUrlApi}/api/v1/users/upload-avatar/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/form-data',
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
