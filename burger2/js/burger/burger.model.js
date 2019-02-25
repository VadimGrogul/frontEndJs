class BurgerModel {
    constructor() {
        this._data = new BurgerData();

        this._size;
        this._stuffing;
        this._toppings = [];

        this._setDefaultBurgerData();
    }

    _setDefaultBurgerData() {
        this._size = this.getSize('small');
        this._stuffing = this.getStuffing('chicken');
    }

    getSize(sizeName) {
        let size = this._data.sizes.find(s => s.name === sizeName);
        return size;
    }

    getStuffing(stuffingName) {
        let stuffing = this._data.stuffings.find(s => s.name ===stuffingName);
        return stuffing;
    }

    setSize(sizeName, cb) {
        let size = this.getSize(sizeName);
        if(!size) {
            return;
        }

        this._size = size;
        cb(this.getBurgerData());
    }

    setStuffing(stuffingName, cb) {
        let stuffing = this.getStuffing(stuffingName);

        if(!stuffing) {
            return;
        }

        this._stuffing = stuffing;

        cb(this.getBurgerData());
    }

    calcPrice() {
        let price = this._size.price + this._stuffing.price;
        this._toppings.forEach(p => price += p.price);
        return price;
    }

    getBurgerData(cb) {
        let data = {
            size: this._size,
            stuffing: this._stuffing,
            totalPrice: this.calcPrice()
        }

        if(!cb) {
            return data;
        }

        cb(data);
    }
}