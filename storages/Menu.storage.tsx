import {makeAutoObservable} from "mobx";

class MenuStorage {
    show: boolean

    constructor() {
        makeAutoObservable(this)

        this.show = false
    }

    changeMenuActive = () =>
        this.show = !this.show


}

export default new MenuStorage();