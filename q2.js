function fatorial(number) {
    if (number == 1) return 1;
    return number * fatorial(number - 1);
}

console.time('tempo');
console.log(`53! = ${fatorial(53)}`);
console.timeEnd('tempo');