class BurgerModule {
    constructor() {
        this._burgerModel = new BurgerModel();
        this._burgerView = new BurgerView();
        this._burgerController = new BurgerController(this._burgerModel, this._burgerView);
    }

    init() {
        this._burgerController.init();
    }
}