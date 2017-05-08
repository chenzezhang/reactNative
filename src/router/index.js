
class pushPage {

    constructor(navigator, name, component, params = {}) {
        this.navigator = navigator;
        this.name = name;
        this.component = component;
        this.params = params;
        this.routes = navigator.getCurrentRoutes();
    }

    static aaa() {
        for (let i = 0; i < routes.length; i++) {
            if (name === routes[i].name) {
                return;
            }
        }

        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                name: name,
                component: component,
                params: params
            });
        
        })

    }
}

export default pushPage