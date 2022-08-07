newFunction();

function newFunction() {
    const users = [{
        name: 'Bianca Farias ',
        age: '20',
        city: 'Mairinque',
    }, {
        name: 'Pierre Reis',
        age: '15',
        city: 'Votorantim',
    }, {
        name: 'Pietro Bertocco',
        age: '18',
        city: 'Londrina'
    }];
    constmaisNovos = users.filter(user => user.age < 20); console.log(maisNovos);
}

newFunction();

function newFunction() {
    const users = [{
        name: 'Bianca Farias ',
        age: '20',
        city: 'Mairinque',
    }, {
        name: 'Pierre Reis',
        age: '15',
        city: 'Votorantim',
    }, {
        name: 'Pietro Bertocco',
        age: '18',
        city: 'Londrina'
    }];
    constmaisVelhos = users.filter (user => user.age > 20); console.log (maisVelhos);
}

function newFunction() {
    const users = [{
        name: 'Bianca Farias ',
        age: '20',
        city: 'Mairinque',
    }, {
        name: 'Pierre Reis',
        age: '15',
        city: 'Votorantim',
    }, {
        name: 'Pietro Bertocco',
        age: '18',
        city: 'Londrina'
    }];
    constCity = users.filter (user => user.city ); console.log (City);
}
