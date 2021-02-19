import { router } from '../main.js';
import { Component } from '../core.js'
import { HeaderComponent } from './header.js';

export const headerComponent = new HeaderComponent();

export class AppComponent extends Component {
    getView = () => {
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