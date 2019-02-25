class BurgerView {
    controller() {}

    renderBurgerData(data) {
        console.log(data);
    }

    listenSizeChange(cb) {
        cb('medium');
    }

    listenStuffingChange(cb) {
        cb('pork');
    }
}