import Navbar from "../components/Navbar.js";

export default function (data) {
    return /*html*/`
        <header>
            ${Navbar()}
        </header>
        <section class="hero">
            <div class="hero-text">
                <p>Hi! I am </p>
                <h1>${data.name}</h1>
                <h2>${data.interests}</h2>
                <p>${data.location}</p>
                <button class="btn">Resume</button>
            </div>
            <div class="hero-image">
                <img src="img/Hero.png" alt="Yayue Zhou">
                <div class="deco-lines"><span></span><span></span><span></span><span></span></div>
            </div>
        </section>
    `;
};