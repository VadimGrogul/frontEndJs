class BurgerController {
    constructor(model, view) {
        this._model = model;
        this._view = view;
    }

    init() {
        this._model.getBurgerData(data => {
            this._view.renderBurgerData(data);
        })

        this._setSize();
        this._setStuffing();
    }

    _setSize() {
        this._view.listenSizeChange(sizeName => {
            this._model.setSize(sizeName, data => {
                this._view.renderBurgerData(data);
            })
        })
    }

    _setStuffing() {
        this._view.listenStuffingChange(stuffingName => {
            this._model.setStuffing(stuffingName, data => {
                this._view.renderBurgerData(data);
            })
        })
    }
}