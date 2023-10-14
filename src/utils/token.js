export const SET_TOKEN = (key, value) => {
    localStorage.setItem(key, value);
}

export const GET_TOKEN = (key) => {
    return localStorage.getItem(key);
}