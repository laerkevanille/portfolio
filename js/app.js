import { CategoryGallery } from './components/CategoryGallery.js';
import { categories } from './data/categories.js';

const categoryGallery = new CategoryGallery(categories);

import { ProjectGallery } from './components/ProjectGallery.js';
import { projects } from './data/projects.js';

const projectGallery = new ProjectGallery(projects);

import { SubcategoryGallery } from './components/SubcategoryGallery.js';
import { subcategories } from './data/subcategories.js';

const subcategoryGallery = new SubcategoryGallery(subcategories);


const toggleBtns = document.querySelectorAll(".toggle-theme");

function toggleTheme() {
    document.body.classList.toggle("dark");
    document.getElementById("themebtn-main").classList.toggle("dark");
    document.getElementById("content-wrapper").classList.toggle("dark");
    document.getElementById("content").classList.toggle("dark");
    document.getElementById("desk-bg").classList.toggle("dark");
}

toggleBtns.forEach(btn => {
    btn.addEventListener("click", toggleTheme);
});


const stageWrap = document.querySelector(".stage-wrap");

const showStage = (stageId, content) => {
    const section = document.createElement("section");
    section.classList.add("stage", "active");

    const div = document.createElement("div");
    div.id = stageId;

    if (content != undefined) {
        div.appendChild(content);
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
            showStage("about-open");
            break;

        case "skills-folder":
            showStage("skills-open");
            break;

        case "projects-folder":
            showStage(
                "projects-open",
                subcategoryGallery.render()
            );
            break;

        case "process-folder":
            showStage("process-open");
            break;

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
