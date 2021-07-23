import axios from 'axios';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;

async function getAccessToken(code) {
  const app = axios.create({
    baseURL: 'https://github.com/login/oauth/',
    headers: { 'content-type': 'application/json', accept: 'application/json' },
  });

  const response = await app
    .post('access_token', null, {
      params: {
        client_id,
        client_secret,
        code,
      },
    })
    .then(res => {
      const { data } = res;
      console.log('data: ', data);
      return data;
    })
    .catch(err => {
      return err;
    });

  return response;
}

app.get('/login/github', async (req, res) => {
  const { code } = req.query;
  const token = await getAccessToken(code);

  return res.status(200).json(token);
});

app.listen(8080, () => console.log('Listening localhost:8080'));
