import axios from 'axios';
import express from 'express';

const app = express();

const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;

app.get('/login/github', (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`,
  );
});

async function getAccessToken(code) {
  const response = await axios
    .post('https://github.com/login/oauth/acess_tolken', {
      Headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        client_id,
        client_secret,
        code,
      }),
    })
    .then(res => {
      const { data } = res;
      console.log(data);
    });
  console.log(response);
}

app.get('/login/github/callback', (req, res) => {
  const { code } = req.query;
  getAccessToken(code);
});

app.listen(3000, () => console.log('Listening localhost:3000'));
