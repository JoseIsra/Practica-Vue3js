
import api from './apiconfig';
import { ApiResponse } from '../utils/interfaces';

const getData = async (term:string):Promise<ApiResponse[]> => {
  const response = await fetch(`${api.url}/${term}/[1,2,3,4,5]`);
  const json = await response.json();
  return json;
};

export default getData;
