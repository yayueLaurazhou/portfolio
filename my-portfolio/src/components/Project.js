export default function (project) {
    return /*html*/`
        ${project.isSmall ? `
            <div class="small-project">
                <h3>${project.id}</h3>
                <p>${project.description}</p>
                <a href="${project.link}">
                    Learn More
                </a>
            </div>
        ` : `
            
            <div class="project">
            <div class="border-left"></div>
            <div class="border-right"></div>
            <div class="shadow-right"></div>
            <div class="shadow-left"></div>
            <div class="shadow-top"></div>
            <div class="shadow-bottom"></div>
                <img src="/img/${project.id}.png" class="project__image">
                <h3>${project.id}</h3>
                <p>${project.description}</p>
                <p>${project.techs.join(', ')}</p>
            </div>
        `}
    `;
}