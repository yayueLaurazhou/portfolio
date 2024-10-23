export default function (project) {
    return /*html*/`
        ${project.isSmall ? `
            <div class="small-project">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}">
                    Learn More
                </a>
            </div>
        ` : `
            <div class="project">
                <img src="public/img/${project.id}.png" class="project__image">
                <h3>${project.id}</h3>
                <p>${project.description}</p>
                <p>${project.techs.join(', ')}</p>
            </div>
        `}
    `;
}