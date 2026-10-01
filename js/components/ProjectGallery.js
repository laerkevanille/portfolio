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
                project.types,
                project.images,
                project.title,
                project.url,
                project.description,
                project.technologies,
                project.readMore
            );
            gallery.appendChild(projectCard.render());  
        }
        );
        return gallery;
    }
}