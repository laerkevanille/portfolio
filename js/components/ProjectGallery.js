import { ProjectCard } from './ProjectCard.js';

export class ProjectGallery {
    constructor(projects = []) {
        this.projects = projects;
    }

    render() {
        const gallery = document.createElement('section');
        gallery.classList.add('project-gallery');
        this.projects.forEach(project => {
            const projectCard = new ProjectCard(
                project.type,
                project.title,
                project.description,
                project.technologies,
                project.images
            );
            gallery.appendChild(projectCard.render());  
        }
        );
        return gallery;
    }
}