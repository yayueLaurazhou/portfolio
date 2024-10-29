import Project from "../components/Project.js";
import projects from "../../public/data/projects.js";

export default function () {
    return /*html*/`
        <section class="portfolio" id="projects">
            <h2 class="h2">Projects</h2>
            <div class="project-grid">
                ${projects.map(project => {
        return Project(project);
    }).join('')}
            </div>
        </section>
    `;
}