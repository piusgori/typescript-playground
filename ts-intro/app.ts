enum role { admin, author,  }

interface p {
    name: string;
    age: number;
    hobbies: Array<string>;
    likes: [number, string];
    role?: number;
}

const person: p = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    likes: [12, 'dk',],
    role: role.admin
}

const add = (n1: number | string, n2: number | string) => {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    } else {
        result = n1.toString() + n2.toString()
    }
    return result;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

if (person.role === role.admin) {
    console.log('Is admin')
}