const toggleBtn = document.querySelector("#lamp-switch");

function toggleTheme() {
    document.body.classList.toggle("dark");
    document.getElementById("content-wrapper").classList.toggle("dark");
    document.getElementById("content").classList.toggle("dark");
    document.getElementById("desk-bg").classList.toggle("dark");
}

toggleBtn.addEventListener("click", toggleTheme);

import { ProjectGallery } from './components/ProjectGallery.js';
import { projects } from './data/projects.js';

const projectGallery = new ProjectGallery(projects);

document.getElementById("pc-content").appendChild(projectGallery.render());