import { adminApiClient } from './httpConfig';

const getDataList = () => adminApiClient.get('/list');

export { getDataList };
