import axios from 'axios';

export const getDataFromUrl = async (getUrl) => {
  return axios
    .get(getUrl)
    .then((response) => response)
    .catch((err) => err);
};

export default { getDataFromUrl };
