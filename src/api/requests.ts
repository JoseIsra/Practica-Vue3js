/* eslint-disable */
import api from './apiconfig';

const getData = async (term:string) => {
  const response = await fetch(`${api.url}/${term}/[1,2,3,4,5]`);
  const json = await response.json();
  return json;
};

export default getData;
