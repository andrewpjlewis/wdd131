import { students } from './students.js';

students.forEach((student) => {
    const article = document.createElement('article');

    const firstName = document.createElement('p');
    firstName.textContent = student.firstName;

    const lastName = document.createElement('p');
    lastName.textContent = student.lastName;

    const iNumeber = document.createElement('p');
    iNumeber.textContent = student.iNumeber;

    const age = document.createElement('p');
    age.textContent = student.age;
    
    const image = document.createElement('img');
    image.setAttribute('src', student.image);

    article.appendChild(firstName, lastName, iNumeber, age);
    document.querySelector('main').appendChild(article);
});


document.querySelector('#firstName').focus();