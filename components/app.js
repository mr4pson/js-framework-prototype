import { Component, router } from '../core.js';
import { HeaderComponent } from './header.js';

export const headerComponent = new HeaderComponent();

export class AppComponent {
    render = () => {
        return `
            ${headerComponent.render()}
            <div class="body">
                <div class="container">
                    ${router.navigate()}
                </div>
            </div>
        `;
    }
}