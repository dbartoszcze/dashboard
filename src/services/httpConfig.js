import axios from 'axios';
import { stringify } from 'qs';
import { API_BASE_URL } from '../constants/defaultValues';

const adminApiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': true,
    'Access-Control-Allow-Headers': true,
  },
  paramsSerializer: (params) => stringify(params, { arrayFormat: 'repeat' }),
});

export { adminApiClient };
