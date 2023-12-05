import axios from "axios"
import { CONFIG } from "../../common"

export const getWeather = async () => {
  const res = await axios.get(`${CONFIG.Jinrishici}/info`);   
  return res.data;
}

