export class Component {
    getView = () => {
        return '';
    };
    render() {
        return this.getView();
    }
}

export class Router {
    component = new Component();
    navigate() {
        return this.component.render();
    }
}

export function ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}