const people = {
    fistName: "Austin",
    lastName: "Oliveira",
    age: 19,
    addrees: {
        street: "",
        number: 24,
        city: "Orlando"
    }
};

// Atribuicao via desestruturacao
const {
    addrees: {
        city: c = ':(',
        number: n,
    },
    fistName: fn,
    addrees: a,
    ...rest
} = people;

console.log(fn, rest);

//  const { fistName: n = '', lastName: last = '', visa = true } = people;
// const name = people.fistName;
//  const { addrees: { city } } = people;