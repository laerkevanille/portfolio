import { SubcategoryCard } from './SubcategoryCard.js';

export class SubcategoryGallery {
    constructor(subcategories = []) {
        this.subcategories = subcategories;
    }

    render() {
        const gallery = document.createElement('section');
        gallery.classList.add('subcategory-gallery');
        this.subcategories.forEach(subcategory => {
            const subcategoryCard = new SubcategoryCard(
                subcategory.images,
                subcategory.title,
                subcategory.id
            );
            gallery.appendChild(subcategoryCard.render());  
        }
        );
        return gallery;
    }
}