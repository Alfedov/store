import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Чайнкики'},
            {id: 2, name: 'Телефоеы'}
        ]
        this._brands = [
            {id: 1, name: 'Lenovo'},
            {id: 2, name: 'Apple'}
        ]
        this._device = [
            {id: 1, name: 'Iphone 12 pro', price: 2500, rating:  5}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevice(device) {
        this._device = device
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get device() {
        return this._device
    }

}