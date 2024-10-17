import Hero from "../blocks/home/Hero.js";
import Projects from "../blocks/home/Projects.js";
import Skills from "../blocks/home/Skills.js";
import About from "../blocks/home/About.js";
import Contacts from "../blocks/home/Contacts.js";

import "styles/pages/home.sass"


export default () => {
    return /*html*/`
        ${Hero}
        ${Projects(t.projects)}
        ${Skills(t.skills, locale.skills)}
        ${About(t.about)}
        ${Contacts}
    `;
};