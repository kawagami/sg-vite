export const SET_TOKEN = (key, value) => {
    localStorage.setItem(key, value);
}

export const GET_TOKEN = (key) => {
    localStorage.getItem(key);
}