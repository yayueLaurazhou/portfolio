import Hero from "../blocks/Hero.js";
import Projects from "../blocks/Projects.js";
import Skills from "../blocks/Skills.js";
import About from "../blocks/About.js";
import Contact from "../blocks/Contact.js";
import data from "../../public/data/data.js";
import projects from "../../public/data/projects.js";
import skills from "../../public/data/skills.js";
import "../../public/styles/views/Home.sass"


export default () => {
    return /*html*/`
        ${Hero(data.hero)}
        ${Projects(projects)}
        ${Skills(skills)}
        ${About(data.about)}
        ${Contact(data.contacts)}
    `;
};