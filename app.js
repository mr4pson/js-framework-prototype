import { app, headerComponent, router } from './main.js';

app.getView = () => {
    return `
        ${headerComponent.render()}
        <div class="body">
            <div class="container">
                ${router.navigate()}
            </div>
        </div>
    `;
}

app.render();