class App {
    constructor() {
        this._burgerModule = new BurgerModule();
    }

    init() {
        this._burgerModule.init();
    }
}

const APP = new App();
APP.init();