import axios from 'axios';
import apiKeys from '../apiKeys.json';

import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getBirbsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/birbs.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const addBirb = (newBirb) => axios.post(`${baseUrl}/birbs.json`, newBirb);

const getBirbById = (birbId) => axios.get(`${baseUrl}/birbs/${birbId}.json`);

const deleteBirb = (birbId) => axios.delete(`${baseUrl}/birbs/${birbId}.json`);

const updateBirb = (birbId, newBirb) => axios.put(`${baseUrl}/birbs/${birbId}.json`, newBirb);

export default {
  getBirbsByUid,
  getBirbById,
  addBirb,
  deleteBirb,
  updateBirb,
};
