import axios from 'axios';

export function SignIn(code: string) {
  return new Promise(resolve => {
    axios
      .post(
        `https://github.com/login/oauth/access_token?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&code=${code}`,
      )
      .then(response => {
        console.log(response);
        console.log(resolve);
      })
      .catch(reason => {
        console.log(reason);
        console.log(resolve);
      });
  });
}
