export class SkillCard {
    constructor(images, title, level) {
        this.images = images;
        this.title = title;
        this.level = level;
    }

    render() {
        const card = document.createElement('section');
        card.classList.add('skill');

        this.images.forEach(image => {
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            card.appendChild(img);
        });

        const txtCont = document.createElement('div');

        const h3 = document.createElement('h3');
        h3.textContent = this.title;
        txtCont.appendChild(h3);

        if (this.level != undefined) {
            const lvl = document.createElement('p');
            lvl.textContent = this.level;
            txtCont.appendChild(lvl);
        }

        card.appendChild(txtCont);

        return card;
    }
}