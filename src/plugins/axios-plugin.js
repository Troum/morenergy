import axios from 'axios';


const AxiosPlugin = {
    install(Vue) {
        Vue.prototype.$axios = axios.create({
            baseURL: `${process.env.VUE_APP_API_URL}/api`,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Accept-Language': document.documentElement.lang
            },
            withCredentials: false,
            crossDomain: false,
            params: {}
        });
    }
};

export default (AxiosPlugin);
