function recursiva(max) {
    if(max >= 1000) return;
    max++
    console.log(max);
    recursiva(max);
}

recursiva(0);