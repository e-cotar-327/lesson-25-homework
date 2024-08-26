// Exercitiul 2
/*
Scrieți o funcție cu numele plural care să:
Accepte 2 argumente: un substantiv și un număr.
Întoarcă o propoziție ce conține numărul și substantivul la plural (dacă e cazul), ex: “I have 5 cats” sau “I have 1 dog”. 
Chemați funcția cu datele: “6 pig”, “0 hamster”, “1 parrot”.
Bonus: includem şi exceptiile "sheep" (“I have 1 sheep”, “I have 4 sheep”) şi "geese" (“I have 1 goose”, “I have 9 geese”)
*/

function plural(noun, number) {
    if (number != 1 && noun != 'sheep' && noun != 'geese') {
        return number + ' ' + noun + 's';
    } else {
        return number + ' ' + noun;
    }
}
console.log('I have ' + plural('cat', 0));
console.log('I have ' + plural('dog', 1));
console.log('I have ' + plural('sheep', 2));

//alte variante
function plural(substantiv, numar) {
    if (numar !== 1 && substantiv !== 'sheep' && substantiv !== 'goose') {
        console.log('I have ' + numar + ' ' + substantiv + 's');
    } else if (substantiv == 'goose' && numar !== 1) {
        console.log('I have ' + numar + ' geese');
    }
    else {
        console.log('I have ' + numar + ' ' + substantiv);
    }
}

function plural2(sub, num) {
    if (num == 1 || sub == 'sheep') {
        console.log('I have ' + num + ' ' + sub);
    } else if (sub == 'goose' && num !== 1) {
        console.log('I have ' + num + ' geese');
    }
    else {
        console.log('I have ' + num + ' ' + sub + 's');
    }
}

function plural3(sub, num) {
    if (num == 1) {
        console.log('I have ' + num + ' ' + sub);
    } else if (sub == 'goose') {
        console.log('I have ' + num + ' ' + 'geese');
    } else if (sub == 'sheep') {
        console.log('I have ' + num + ' ' + 'sheep');
    } else {
        console.log('I have ' + num + ' ' + sub + 's');
    }
}


plural2('goose', 0);
plural2('hamster', 0);
plural2('parot', 1);
plural2('pig', 6);
plural2('goose', 1);

console.log('varianta 3');
plural3('goose', 0);
plural3('hamster', 0);
plural3('parot', 1);
plural3('pig', 6);
plural3('goose', 1);


//----------------------------------------------------------------------//
// Exercitiul 4 - facut impreuna in clasa
/*
Creați o programă care are definite 3 variabile numele, anulNasterii şi isF (boolean).
Creați o funcție care calculează vârsta persoanei.
Creați o funcţie care acceptă o valoare booleană isF și întoarce vârsta de pensionare (folosiți ternaryOperator  - 67 bărbați, 64 femei);
Creați o funcție care află dacă persoana este deja la pensie, peste câți ani se va pensiona, şi dacă nu este minoră.
Afișați în consolă numele și mesajul de pensionare după exemplu: “Vasile mai are 26 de ani până la pensionare”. Chemați numai o funcție cu datele.
Date: Sergiu, 1979. Anastasia, 1963. Andreea, 2010.
*/

// const numele = prompt('Numele persoanei')
// const anulNasterii = Number(prompt('introduceti anul nasterii'))
// const isF = Boolean(prompt('introducti 1 daca persoana este femeie si lasati gol daca este barbat'))

const numele = 'Elena';
const anulNasterii = 1992;
const isF = true;

//console.log(typeof (isF), isF);
function virsta(a) {
    return 2024 - a;
}

function virstaDePensionare(b) {
    return b ? 64 : 67;
}

function checkPension(e, c, d) {
    let age = virsta(c);
    let pension = virstaDePensionare(d);
    let aniPinaLaPensie = pension - age;
    console.log(`${age} ${pension} ${aniPinaLaPensie}`);
    if (age < 18) {
        console.log(`${e} este minor, nu calculam anii pina la pensie pentru minori`);
    } else if (age >= pension) {
        console.log(`${e} este deja pensiona${d ? 'ra' : 'r'}`);
    } else {
        console.log(`${e} mai are`, aniPinaLaPensie, 'ani pina la pensie');
    }

}

checkPension(numele, anulNasterii, isF);