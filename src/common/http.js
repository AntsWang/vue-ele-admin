import axios from 'axios';

let instance = axios.create({
    baseUrl: process.env.NODE_ENV == 'development'?'http://www.baidu.com':'',
    timeout: 20000,
    header: {

    }
})

//请求拦截
instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
//响应拦截
instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error)
});
let request = {
    get(url, param={}) {
        return new Promise((resolve, reject) => {
            instance.get(url, { params: param }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err)
            })
        })
    },
    post(url, param) {
        return new Promise((resolve, reject) => {
            instance.post(url, {method:'post',...param}).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err)
            })
        })
    }
}

export default request;


