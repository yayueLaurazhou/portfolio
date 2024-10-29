export default function (data) {
    return /*html*/`
        <section class="contact" id="contact">
            <h2 class="h2">Contact</h2>
            <div class="contact-item">
                ${data.map(contact => `
                    <a href="${contact.link}" target="_blank" rel="noopener noreferrer" class="contact-item">
                        <div>${contact.svg}</div>
                        <span>${contact.title}</span>
                    </a>
                `).join('')}
            </div>
        </section>
    `;
}