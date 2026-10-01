export class PersonCard {
    constructor(images, meow, readMore, name, age, role, description, id) {
        this.images = images;
        this.meow = meow;
        this.readMore = readMore;
        this.name = name;
        this.age = age;
        this.role = role;
        this.description = description;
        this.id = id;
    }

    render() {
        const card = document.createElement('article');
        card.classList.add('profile');
        card.id = this.id;

        const rightWrap = document.createElement('section');
        rightWrap.classList.add('profile-right');

        this.images.forEach(image => {
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;

            if (this.meow !=undefined) {
                const imgSound = document.createElement('button');
                imgSound.id = this.meow;
                imgSound.appendChild(img);
                rightWrap.appendChild(imgSound);
            } else {
                rightWrap.appendChild(img);
            }
        });

        const moreLink = document.createElement('a');
        moreLink.href = this.readMore;
        const moreBtn = document.createElement('div');
        moreBtn.classList.add('profile-more');
        const moreTxt = document.createElement('p');
        moreTxt.textContent = "Læs mere...";
        moreBtn.appendChild(moreTxt);
        moreLink.appendChild(moreBtn);
        rightWrap.appendChild(moreLink);

        card.appendChild(rightWrap);

        const leftWrap = document.createElement('section');
        leftWrap.classList.add('profile-left');

        const nameWrap = document.createElement('div');
        const name = document.createElement('h3');
        name.textContent = "Navn:";
        const nameTxt = document.createElement('p');
        nameTxt.textContent = this.name;
        nameWrap.appendChild(name);
        nameWrap.appendChild(nameTxt);
        leftWrap.appendChild(nameWrap);

        const ageWrap = document.createElement('div');
        const age = document.createElement('h3');
        age.textContent = "Alder:";
        const ageTxt = document.createElement('p');
        ageTxt.textContent = this.age;
        ageWrap.appendChild(age);
        ageWrap.appendChild(ageTxt);
        leftWrap.appendChild(ageWrap);

        const roleWrap = document.createElement('div');
        const role = document.createElement('h3');
        role.textContent = "Rolle:";
        const roleTxt = document.createElement('p');
        roleTxt.textContent = this.role;
        roleWrap.appendChild(role);
        roleWrap.appendChild(roleTxt);
        leftWrap.appendChild(roleWrap);

        const desc = document.createElement('p');
        desc.classList.add('profile-desc');
        desc.textContent = this.description;
        leftWrap.appendChild(desc);
        
        card.appendChild(leftWrap);

        return card;
    }
}