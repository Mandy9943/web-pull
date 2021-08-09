import axios from 'axios';
import { urlApi, baseUrl } from './config';
const API_HOST = urlApi;

const getUrl = (endpoint) => API_HOST + endpoint;
const getUrlFront = (endpoint) => baseUrl + endpoint;

export const post = async (endpoint, data, jwt) => {
	const headers = jwt
		? {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`,
				},
		  }
		: { headers: { 'Content-Type': 'application/json' } };
	return axios.post(getUrl(endpoint), data, headers);
};

export const put = async (endpoint, data, jwt) => {
	const headers = jwt
		? {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`,
				},
		  }
		: { headers: { 'Content-Type': 'application/json' } };
	return axios.put(getUrl(endpoint), data, headers);
};

export const postForm = async (endpoint, data, jwt) => {
	const headers = jwt
		? {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${jwt}`,
					'Access-Control-Allow-Methods': 'PUT',
				},
		  }
		: { headers: { 'Content-Type': 'multipart/form-data' } };
	return axios.post(getUrl(endpoint), data, headers);
};

export const putForm = async (endpoint, data, jwt) => {
	const headers = jwt
		? {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${jwt}`,
				},
		  }
		: { headers: { 'Content-Type': 'multipart/form-data' } };
	return axios.put(getUrl(endpoint), data, headers);
};

export const get = async (endpoint, jwt) => {
	const headers = jwt
		? {
				headers: { Authorization: `Bearer ${jwt}` },
		  }
		: null;
	return axios.get(getUrl(endpoint), headers);
};

export const getFront = async (endpoint, jwt) => {
	const headers = jwt
		? {
				headers: { Authorization: `Bearer ${jwt}` },
		  }
		: null;
	return axios.get(getUrlFront(endpoint), headers);
};

export const rDelete = async (endpoint, jwt) => {
	const headers = jwt
		? {
				headers: { Authorization: `Bearer ${jwt}` },
		  }
		: null;
	return axios.delete(getUrl(endpoint), headers);
};

export const sget = async (endpoint, jwt) => {
	const headers = jwt
		? {
				headers: { Authorization: `Bearer ${jwt}` },
		  }
		: null;
	return await axios.get(getUrl(endpoint), headers);
};
// http://10.4.28.179:5000/qwe
export const apiget = async (endpoint, jwt) => {
	const headers = jwt
		? {
				headers: { Authorization: `Bearer ${jwt}` },
		  }
		: null;
	// console.log('apiget', await axios.get(endpoint, headers));
	return await axios.get(endpoint, headers);
};

// TODO: Avoid duplicating all these functions
export const apiget2 = async (endpoint, config) => {
	// Basically add if defined in function params
	const conf = {
		...(config.jwt && { headers: { Authorization: `Bearer ${config.jwt}` } }),
		...(config.params && { params: config.params }),
	};
	return await axios.get(getUrl(endpoint), config);
};

// ==================================================================
// Duplicating get function with error catch to avoid crashing - lame
const request = (method, endpoint, config) => {
	const conf = {
		method,
		url: endpoint,
		...(config.jwt && { headers: { Authorization: `Bearer ${config.jwt}` } }),
		...(config.params && { params: config.params }),
		...(config.data && { data: config.data }),
	};
	return axios(conf);
};

export const get_ = async (endpoint, jwt) => {
	let conf = { jwt };
	// console.log(endpoint);
	try {
		let data = await request('get', getUrl(endpoint), conf);
		// console.log(data);
		return data;
	} catch (err) {
		let data = await err.response;
		// console.log(data);
		return data;
	}
};

export const put_ = async (endpoint, jwt, data) => {
	let conf = {
		jwt,
		data,
	};
	try {
		let r = await request('put', getUrl(endpoint), conf);
	} catch (err) {
		return await err.response;
	}
};

export const postProduct = async (endpoint, data) => {
	const headers = jwt
		? {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`,
				},
		  }
		: { headers: { 'Content-Type': 'application/json' } };
	return axios.post(endpoint, data, headers);
};



export const getProduct = async (endpoint, jwt) => {
	const headers = jwt
		? {
				headers: { Authorization: `Bearer ${jwt}` },
		  }
		: null;
	return axios.get(getUrl(endpoint), headers);
};