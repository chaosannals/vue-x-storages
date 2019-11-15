import BaseStorage from './base';

/**
 * 缓存管理
 * 
 */
export default class CacheStorage extends BaseStorage {
    /**
     * 初始化
     * 
     * @param {*} duration 持续时间
     */
    constructor(duration) {
        super(localStorage, duration);
    }
}