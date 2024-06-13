const student1 = {
    firstName: 'Jim',
    lastName: 'Halpert',
    iNumeber: '123-45-6789',
    age: 20,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnS9W1s0WQxJyj0H6Y2Sj9e2n6Zw0t0dL9&usqp=CAU'
}

const student2 = {
    firstName: 'Pam',
    lastName: 'Beesly',
    iNumeber: '987-65-4321',
    age: 30,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnS9W1s0WQxJyj0H6Y2Sj9e2n6Zw0t0dL9&usqp=CAU'
}

const student3 = {
    firstName: 'Dwight',
    lastName: 'Schrute',
    iNumeber: '555-55-5555',
    age: 40,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnS9W1s0WQxJyj0H6Y2Sj9e2n6Zw0t0dL9&usqp=CAU'
}

export const students = {student1, student2, student3}

function addStudent(firstName, lastName, iNumeber, age, image) {
    const newStudent = {
        firstName,
        lastName,
        iNumeber,
        age,
        image,
    };
    students.push(newStudent);