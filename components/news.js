import { Component } from "../core.js";

export class NewsPageComponent extends Component {
    votes = 0;
    increaseVotes() {
        this.votes++;
    }
    render = () => {
        return `
            <div>News page</div>
            <div>${this.votes}</div>
            <button click="this.increaseVotes();">Vote</button>
        `;
    }
}