export class ProjectCard {
    constructor(types, images, title, url, description, technologies, readMore) {
        this.types = types;
        this.images = images;
        this.title = title;
        this.url = url;
        this.description = description;
        this.technologies = technologies;
        this.readMore = readMore;
    }
    render() {
        const card = document.createElement('article');

        this.types.forEach(type => {
            card.classList.add(type);
        });

        this.images.forEach(image => {
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            card.appendChild(img);
        });

        const h3 = document.createElement('h3');
        h3.textContent = this.title;
        card.appendChild(h3);

        
        if (this.url != undefined) {
            const a = document.createElement('a');
            a.href = this.url;
            a.classList.add('project-link');
            const linkTxt = document.createElement('p');
            linkTxt.textContent = "Åbn hjemmeside";
            a.appendChild(linkTxt);
            card.appendChild(a);
        }

        const p = document.createElement('p');
        p.textContent = this.description;
        card.appendChild(p);

        if (this.technologies != undefined) {
            const techList = document.createElement('ul');
            this.technologies.forEach(tech => {
                const li = document.createElement('li');
                li.textContent = `${tech}\u00A0☆\u00A0`;
                techList.appendChild(li);
            });
            card.appendChild(techList);
        }

        const moreLink = document.createElement('a');
        moreLink.href = this.readMore;
        const moreBtn = document.createElement('div');
        moreBtn.classList.add('more-btn')
        const moreTxt = document.createElement('p');
        moreTxt.textContent = "Læs mere...";
        moreBtn.appendChild(moreTxt);
        moreLink.appendChild(moreBtn);
        card.appendChild(moreLink);

        return card;
    }
}