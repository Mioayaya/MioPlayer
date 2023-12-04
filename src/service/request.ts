import originAxios from 'axios';
import { CONFIG } from '../common';

interface Ioption {
  url: string
  params?: object
}

export default function request(option:Ioption) {
	return new Promise((resolve, reject) => {

    const instance = originAxios.create({
			baseURL: CONFIG.BaseURL,			
			timeout: 10000,
			withCredentials: true,
			// params: {
			// 	cookie: document.cookie
			// }
		});

		instance.interceptors.request.use(config => {
      config.headers.cookie = document.cookie;
			return config
		}, err => {
			return err
		})

		instance.interceptors.response.use(response => {
			return response.data
		}, err => {
			console.log('来到了response拦截failure中');
      console.log(err);
      if (err && err.response) {
				switch (err.response.status) {
					case 400:
						err.message = '请求错误'
						break
					case 401:
						err.message = '未授权的访问'
						break
					default:
						err.message = "其他错误信息"
				}
			}
			return err
		})

		instance(option).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}
