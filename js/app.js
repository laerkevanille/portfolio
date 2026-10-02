import { CategoryGallery } from './components/CategoryGallery.js';
import { categories } from './data/categories.js';

const categoryGallery = new CategoryGallery(categories);

import { PersonGallery } from './components/PersonGallery.js';
import { people } from './data/people.js';

const personGallery = new PersonGallery(people);

import { SkillGallery } from './components/SkillGallery.js';
import { skills } from './data/skills.js';

const skillGallery = new SkillGallery(skills);

import { SubcategoryGallery } from './components/SubcategoryGallery.js';
import { subcategories } from './data/subcategories.js';

const subcategoryGallery = new SubcategoryGallery(subcategories);

import { ProjectGallery } from './components/ProjectGallery.js';
import { projects } from './data/projects.js';

const projectGallery = new ProjectGallery(projects);


const aboutSkills = document.getElementById("about-skills");

if (aboutSkills) {
    aboutSkills.appendChild(skillGallery.render());
}



const toggleBtns = document.querySelectorAll(".toggle-theme");

function toggleTheme() {
    document.querySelectorAll(".toggle").forEach(tgl => {
        tgl.classList.toggle("dark");
    });
};

toggleBtns.forEach(btn => {
    btn.addEventListener("click", toggleTheme);
});

const lampAudio = new Audio('../aud/lamp.mp3');

const lampSound = document.getElementById("lamp-switch");
lampSound.addEventListener("click", () => {
    lampAudio.play();
});


const stageWrap = document.querySelector(".stage-wrap");

const showStage = (stageId, content) => {
    const section = document.createElement("section");
    section.classList.add("stage", "active");

    const div = document.createElement("div");
    div.classList.add("stage-content");
    div.id = stageId;

    if (content != undefined) {
        div.appendChild(content);
    }

    if (stageId !== "folders") {
        const homeBtn = document.createElement("button");
        homeBtn.classList.add("home-btn");

        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-house");

        homeBtn.appendChild(icon);

        homeBtn.addEventListener("click", () => {
            showStage(
                "folders",
                categoryGallery.render()
            );
        });

        div.appendChild(homeBtn);
    }

    section.appendChild(div);
    stageWrap.replaceChildren(section);
};

showStage(
    "folders",
    categoryGallery.render()
);

const nextStage = (e) => {
    const button = e.target.closest(".folder");

    if (!button) return;

    switch (button.id) {

        case "about-folder":
            showStage(
                "about-open", 
                personGallery.render()
            );
            break;

        case "skills-folder":
            showStage(
                "skills-open", 
                skillGallery.render()
            );
            break;

        case "projects-folder":
            showStage(
                "projects-open",
                subcategoryGallery.render()
            );
            break;

        /*case "process-folder":
            showStage("process-open");
            break;*/

        case "web-folder":
            showStage(
                "web-open",
                projectGallery.render()
            );
            break;

        case "graphic-folder":
            showStage(
                "graphic-open",
                projectGallery.render()
            );
            break;

        default:
            console.log("Unknown folder:", button.id);
    }
};

stageWrap.addEventListener("click", nextStage);

const profileAudio = new Audio('../aud/meow.mp3');

stageWrap.addEventListener("click", (e) => {
    const profileSound = e.target.closest("#meow");

    if (!profileSound) return;

    profileAudio.play();
});