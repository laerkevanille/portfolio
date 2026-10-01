import { CategoryCard } from './CategoryCard.js';

export class CategoryGallery {
    constructor(categories = []) {
        this.categories = categories;
    }

    render() {
        const gallery = document.createElement('section');
        gallery.classList.add('category-gallery');
        this.categories.forEach(category => {
            const categoryCard = new CategoryCard(
                category.images,
                category.title,
                category.id
            );
            gallery.appendChild(categoryCard.render());  
        }
        );
        return gallery;
    }
}