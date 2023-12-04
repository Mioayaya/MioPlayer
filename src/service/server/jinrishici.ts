import axios from "axios"
import { CONFIG } from "../../common"

export const getWeather = async () => {
  const res = await axios.get(`${CONFIG.Jinrishici}/info`);   
  return res.data;
}

export const getPoem = async () => {
  const token = 'z22QMv7nnz/Uyw/FLBs0bN+QX6di1Ax5';
  const res = await axios.get(`${CONFIG.Jinrishici}/sentence`,{
    withCredentials: true,
    headers: {
      'X-User-Token': token
    }
  });
  console.log(res);
  
  return res;
}
