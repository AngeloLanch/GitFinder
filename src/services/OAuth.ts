import axios from 'axios';

export async function getToken(code: string) {
  try {
    const token = await axios.get(`http://localhost:3000/login/github`, {
      params: { code },
    });
    return token;
  } catch (error) {
    return error;
  }
}
