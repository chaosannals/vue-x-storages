import CacheStorage from './storage/cache';
import SessionStorage from './storage/session';

export const cache = new CacheStorage();
export const session = new SessionStorage();

export default {
    install(Vue) {
        Vue.prototype.$cache = cache;
        Vue.prototype.$session = session;
    },
};