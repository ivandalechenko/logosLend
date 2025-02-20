import { makeAutoObservable } from "mobx";

class LoadingStore {
    loading = false;
    constructor() {
        makeAutoObservable(this);
    }

    setLoading = (state) => {
        this.loading = state
    }

}

export default new LoadingStore();
