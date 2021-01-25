// export const login = credentials =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       resolve({
//         data: {
//           token: '123456',
//           user: {
//             name: 'Bruno',
//             email: 'dev@brunobertolini.com',
//           },
//         },
//       })
//     }, 3000)
//   })



import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:3333'
    baseURL: 'http://192.168.15.29:3333'
});

export async function login(data) {
  const request = await api.post("session", data);
  // console.log(request.data.token)
  return request.data;
}

