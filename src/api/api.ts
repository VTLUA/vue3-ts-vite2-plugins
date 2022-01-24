import { request } from "./request"; 

/**
 * @description -封装User类型的接口方法
 */

 export class UserService {       // 模块一
    /**
     * @description 用户登录
     * @param {string} username - 用户名
     * @return {HttpResponse} result
     */
    static async login(params: any) {   // 接口一
        return request('/login',params, 'post')
    }
}

export class landRelevant {     // 模块二
    /**
     * @description 获取地列表
     * @return {HttpResponse} result
     */
    static async landList(params: any) {
        return request('/land_list_info',params, 'get')
    }
}