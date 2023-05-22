import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmFkM2VlOTFiNjhkZjdiZDEyMGQzNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTI5OTI3NywiZXhwIjoxNjgxNTU4NDc3fQ.FTY0ow7gIBShahT217XbDeK-_vq6qcZ1Ec3lGcL11zc';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
