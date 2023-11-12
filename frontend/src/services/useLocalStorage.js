export const useLocalStorage = {
    setStorage: SetStorage,
    getStorage: GetStorage
}

function SetStorage(key, payload) {
    localStorage.setItem(key, JSON.stringify(payload))
}

function GetStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}