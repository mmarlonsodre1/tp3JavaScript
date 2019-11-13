function checkTriangulo(l1, l2, l3) {
    if (l1 === l2 && l2 === l3) {
        return console.log('Equilatero');
    } else if ((l1 > l2 && l2 > l3) || (l2 > l1 && l1 > l3) ||
        (l3 > l2 && l2 > l1)) {
        return console.log('Isosceles');
    } else {
        return console.log('Escaleno');
    }
}
checkTriangulo(5, 5, 5);
checkTriangulo(45, 45, 90);
checkTriangulo(25, 35, 45);