
import { AppComponent } from './components/app.js';

// component imports
// import { NewsPageComponent } from './components/news.js';
// import { ProjectsPageComponent } from './components/projects.js'; 

function getPageClass(name) {
    return eval('new ' + ucfirst(name) + 'PageComponent()');
}

export class Router {
    component = null;
    navigate() {
        return this.component ? this.component.render() : '';
    }
}

export const app = new AppComponent();
export const router = new Router();

export class Component {
    static rerender() {
        const root = document.getElementById('root');
        
        root.innerHTML = app.render();
        const hrefs = document.querySelectorAll('[hyperLink]');
        hrefs.forEach((href) => {
            href.addEventListener('click', (e) => {
                e.preventDefault();
                const url = href.attributes.hyperLink.value;
                history.pushState({}, href.innerHTML, url);

                const pageComponent = getPageClass(url);
                router.component = pageComponent;

                Component.rerender();
            })
        });
    }
    constructor() {
        setTimeout(() => {
            const clickableElems = document.querySelectorAll('[click]');
            clickableElems.forEach((clickableElem) => {
                clickableElem.addEventListener('click', (e) => {
                    console.log(123123);
                    const method = clickableElem.attributes.click.value;
                    eval(method);
                    Component.rerender();
                });
            });
        });
    }
    render() {
        return '';
    }
}

export function ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}