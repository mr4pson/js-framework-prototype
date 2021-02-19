import { Component } from '../core.js'

export class HeaderComponent extends Component {
    getView = () => {
        return `
            <div class="header">
                <a hyperLink="projects" href="news.html">О проекте</a>
                <a hyperLink="news" href="javascript:void(0)">Новости</a>
                <a href="javascript:void(0)">Лица проекта</a>
                <a href="javascript:void(0)">Организаторы</a>
                <a href="javascript:void(0)">Информационные партнёры</a>
            </div>
        `;
    }
}