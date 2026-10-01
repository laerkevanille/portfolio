export class ProjectCard {
    constructor(type, title, description, technologies, images) {
        this.type = type;
        this.title = title;
        this.description = description;
        this.technologies = technologies;
        this.images = images;
    }
    render() {
        const card = document.createElement('article');
        card.classList.add(this.type);
        const h3 = document.createElement('h3');
        h3.textContent = this.title;
        card.appendChild(h3);

        const p = document.createElement('p');
        p.textContent = this.description;
        card.appendChild(p);

        const techList = document.createElement('ul');
        this.technologies.forEach(tech => {
            const li = document.createElement('li');
            li.textContent = tech;
            techList.appendChild(li);
        });
        card.appendChild(techList);

        this.images.forEach(image => {
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            card.appendChild(img);
        });

        return card;
    }
}