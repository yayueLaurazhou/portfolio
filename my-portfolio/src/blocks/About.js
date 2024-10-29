export default function (data) {
    return /*html*/`
        <section class="about" id="about">
            <h2 class="h2">About Me</h2>
        <p class="about__text">${data.description1.join('. ')}</p>
        <p class="about__text">${data.description2.join('. ')}</p>
        </section >
        `;
}
