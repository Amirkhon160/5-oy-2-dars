let nameInput = prompt('Ismingizni kiriting');
let loginInput = prompt('Login kiriting');
let parolInput = prompt('Parol kiriting');

let users = [
    {
        name: "Amirxon",
        login: 'amirxon0106',
        parol: 1703465
    },
    {
        name: "Emir",
        login: 'user12',
        parol: 1814734
    },
    {
        name: "Salohiddin",
        login: 'saloh9090',
        parol: 1601928
    }
];

let userObject = {};

for (let i = 0; i < users.length; i++) {
    let user = users[i];
    
    if (user.name === nameInput && user.login === loginInput && user.parol == parolInput) {
        userObject = {
            name: nameInput,
            ID: loginInput,
            password: parolInput
        };
        alert(`Xush kelibsan`)
        break;  
    }
    else{
        alert('Kimsan ozi?')
    }
}

console.log(userObject);
