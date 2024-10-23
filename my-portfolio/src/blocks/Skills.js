export default function (data) {
    return /*html*/`
        <section class="skills">
            <div class="skills-container">
                ${data.map(skill => /*html*/`
                    <div class="skill-card">
                        <img src="${skill.icon}" class="skill-icon" alt="${skill.name} icon">
                        <div class="skill-content">
                            <h3>${skill.name}</h3>
                            <p>${skill.description}</p>
                        </div>
                    </div>
                 `).join('')}
            </div>
        </section>
    `;
}