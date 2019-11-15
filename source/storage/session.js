import BaseStorage from './base';

/**
 * 会话管理
 * 
 */
export default class SessionStorage extends BaseStorage {
    /**
     * 初始化。
     * 
     * @param {*} duration 持续时间
     */
    constructor(duration) {
        super(sessionStorage, duration);
    }
}