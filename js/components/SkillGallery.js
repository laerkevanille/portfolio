import { SkillCard } from './SkillCard.js';

export class SkillGallery {
    constructor(skills = []) {
        this.skills = skills;
    }

    render() {
        const gallery = document.createElement('section');
        gallery.classList.add('skill-gallery');
        this.skills.forEach(skill => {
            const skillCard = new SkillCard(
                skill.images,
                skill.title,
                skill.level
            );
            gallery.appendChild(skillCard.render());  
        }
        );
        return gallery;
    }
}