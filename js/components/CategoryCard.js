export class CategoryCard {
    constructor(images, title, id) {
        this.images = images;
        this.title = title;
        this.id = id;
    }

    render() {
        const card = document.createElement('button');
        card.classList.add('folder');
        card.id = this.id;

        this.images.forEach(image => {
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            card.appendChild(img);
        });

        const h3 = document.createElement('h3');
        h3.textContent = this.title;
        card.appendChild(h3);

        return card;
    }
}