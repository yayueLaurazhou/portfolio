export default function Navbar() {

    document.addEventListener('DOMContentLoaded', function () {
        // Select all links with hashes (like #section1, #section2, etc.)
        const links = document.querySelectorAll('a[href^="#"]');

        // Add event listener to each link
        links.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                // Get the target section (based on href)
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                // Scroll smoothly to the target section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
    });

    return /*html*/`
        <nav>
            <a href="#hero">Home</a>
            <a href="#Projects">Projects</a>
            <a href="#About">Skills</a>
            <a href="#">About</a>
            <a href="#section4">Contact</a>
            </ul>
        </nav>
    `;
}