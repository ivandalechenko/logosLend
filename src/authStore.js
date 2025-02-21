import { makeAutoObservable } from "mobx";

class AuthStore {
    auth = false;
    constructor() {
        makeAutoObservable(this);
    }

    setAuth = (state) => {
        this.auth = state
    }

}

export default new AuthStore();
