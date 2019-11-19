/**
 * 存储管理器。
 * 
 */
export default class BaseStorage {
    /**
     * 
     * @param {*} duration 缓存市场。
     */
    constructor(storage, duration) {
        this.tags = {};
        this.storage = storage;
        this.duration = duration || Infinity;
    }

    /**
     * 
     * @param {*} name 
     * @param {*} defaultValue 
     */
    has(name) {
        let now = new Date().getTime();
        let text = this.storage.getItem(name);
        if (!text) {
            return false;
        }
        let data = JSON.parse(text);
        let expired = data.expired || Infinity;
        if (expired < now) {
            this.storage.removeItem(name);
            return false;
        }
        return true;
    }

    /**
     * 获取信息。
     * 
     * @param {*} name 键名
     * @param {*} defaultValue 默认值
     */
    get(name, defaultValue) {
        let now = new Date().getTime();
        let text = this.storage.getItem(name);
        if (!text) {
            return defaultValue;
        }
        let data = JSON.parse(text);
        let expired = data.expired || Infinity;
        if (expired < now) {
            this.storage.removeItem(name);
            return defaultValue;
        }
        return data.value;
    }

    /**
     * 获取信息。
     * 
     * @param {*} name 键名
     * @param {*} value 值
     * @param {*} duration 持续时间
     */
    set(name, value, duration) {
        let now = new Date().getTime();
        let data = {
            value: value,
            expired: now + (duration || this.duration)
        }
        this.storage.setItem(name, JSON.stringify(data));
    }

    /**
     * 删除信息，不填为全删。
     * 
     * @param {*} name 键名
     */
    drop(sign) {
        if (sign) {
            if (typeof (sign) == 'string') {
                this.storage.removeItem(sign);
            } else {
                for (let name of sign) {
                    this.storage.removeItem(name);
                }
            }
        } else {
            this.storage.clear();
        }
    }

    /**
     * 标签组。
     * 
     */
    tag(tag, name) {
        if (!this.tags[tag]) {
            this.tags[tag] = new Set();
        }
        if (this.has(name)) {
            this.tags[tag].add(name);
        }
        return this.tags[tag];
    }
}