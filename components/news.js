import { Component } from "../core.js";

export class NewsPageComponent extends Component {
    getView = () => {
        return `
            <div>Страница новостей</div>
        `;
    }
}