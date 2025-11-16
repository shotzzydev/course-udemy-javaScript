let VarA = "A" // B
let VarB = "B" // C
let VarC = "C" // A

const value = VarA;

VarA = VarB; // => B
VarB = VarC; // => C
VarC = value; // => A

console.log(VarA, VarB, VarC);