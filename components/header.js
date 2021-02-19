
export class HeaderComponent {
    render = () => {
        return `
            <div class="header">
                <a hyperLink="projects" href="news.html">Projects</a>
                <a hyperLink="news" href="javascript:void(0)">Last news</a>
                <a href="javascript:void(0)">Our future</a>
                <a href="javascript:void(0)">Organizators</a>
                <a href="javascript:void(0)">Information partners</a>
            </div>
        `;
    }
}