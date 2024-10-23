export default function (data) {
    return /*html*/`
        <section class="about">
            <h2>About Me</h2>
            <p class="about__text">${data.description}</p>
        </section>
    `;
}
