import Vue from 'vue';
import App from './App';
import axios from 'axios';

Vue.config.productionTip = false;

Vue.component('chapter-list', require('./components/ChapterList').default);
Vue.component('page', require('./components/Page').default);
Vue.component('page-number', require('./components/PageNumber').default);
Vue.component('zoom-value', require('./components/ZoomValue').default);

Vue.prototype.$http = axios;

Vue.mixin({
    methods: {
        $_pagePath (chapter, page) {
            const paddedPage = String(page).padStart(3, '0');
            return `images/chapter-${chapter}/${paddedPage}.jpg`;
        }
    }
});

window.bus = new Vue();

window.addEventListener('keydown', function ({ code }) {
    window.bus.$emit('handle-keydown', code);
});

new Vue({
    render: (h) => h(App)
}).$mount('#app');
