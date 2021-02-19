import { Component, Router, ucfirst } from './core.js';
import { HeaderComponent } from './components/header.js';

// exports
import { NewsPageComponent } from './components/news.js';
import { ProjectsPageComponent } from './components/projects.js'; 

function getPageClass(name) {
    return eval('new ' + ucfirst(name) + 'PageComponent()');
}

export const headerComponent = new HeaderComponent();

export const router = new Router();
export const app = new Component();
app.render = function() {
    const root = document.getElementById('root');

    root.innerHTML = this.getView();
    const hrefs = document.querySelectorAll('[hyperLink]');
    hrefs.forEach((href) => {
        href.addEventListener('click', (e) => {
            e.preventDefault();
            const url = href.attributes[0].value;
            history.pushState({}, href.innerHTML, url);

            const pageComponent = getPageClass(url);
            router.component = pageComponent;

            app.render();
        })
    });
}