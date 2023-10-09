import request from "../../utils/request";

// enum API{
//     LOGIN_URL=''
// }

const API = {
    LOGIN_URL: '/user/login',
    USERINRO_URL: '/user/info'
}

export const reqLogin = (data) => request.post(API.LOGIN_URL, data);
export const reqUserInfo = () => request.get(API.USERINRO_URL);