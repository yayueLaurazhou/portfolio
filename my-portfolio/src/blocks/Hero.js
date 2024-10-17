import Navbar from "./Navbar.js";

export default () => {
    return /*html*/`
        <section class="hero">
            <header>
                ${Navbar()}
            </header>
            <div class="hero-text">
                <h1>Hello, I'm Laura Zhou</h1>
                <h2>Product<br>Designer</h2>
                <p>based in London.</p>
                <button class="resume-btn">Contact me</button>
            </div>
            <div class="hero-image">
                <img src="https://v0.dev/placeholder.svg?height=300&width=300" alt="Yayue Zhou">
            </div>
        </section>
    `;
};