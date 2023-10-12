import { defineStore } from 'pinia';

let useLayOutSettingStore = defineStore('SettingStore', {
    state: () => {
        return {
            fold: false,
        }
    }
});

export default useLayOutSettingStore;