const RemoveShow = {
    install(Vue) {
        Vue.prototype.$removeShow = () => {
            document.getElementById('collapse').style.height = '0';
            document.getElementById('collapse').style.display = 'block';
        };
    }
};

export default (RemoveShow);
