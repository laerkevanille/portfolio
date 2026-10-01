import { PersonCard } from './PersonCard.js';

export class PersonGallery {
    constructor(people = []) {
        this.people = people;
    }

    render() {
        const gallery = document.createElement('section');
        gallery.classList.add('person-gallery');
        this.people.forEach(person => {
            const personCard = new PersonCard(
                person.images,
                person.meow,
                person.btn,
                person.name,
                person.age,
                person.role,
                person.description,
                person.id
            );
            gallery.appendChild(personCard.render());  
        }
        );
        return gallery;
    }
}